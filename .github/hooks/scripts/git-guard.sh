#!/usr/bin/env bash
# git-guard.sh — PreToolUse hook
# 拦截 AI 未经授权执行的 git 写操作
# 触发时向用户弹出确认，而非静默执行

set -euo pipefail

INPUT=$(cat)

# 提取 toolName 和 command（兼容解析失败的情况）
TOOL_NAME=$(printf '%s' "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('toolName', ''))
except Exception:
    print('')
" 2>/dev/null || echo "")

COMMAND=$(printf '%s' "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('toolInput', {}).get('command', ''))
except Exception:
    print('')
" 2>/dev/null || echo "")

# ── 分支 1：run_in_terminal（git / gh CLI）────────────────────────────────────
if [ "$TOOL_NAME" = "run_in_terminal" ]; then

  # 将命令按 shell 操作符（&&、||、;、|、换行）拆分为独立片段，逐段检测
  # 同时允许片段前带有环境变量赋值（如 GIT_DIR=... git push）
  REASON=$(COMMAND="$COMMAND" python3 -c "
import re, os, sys

cmd = os.environ.get('COMMAND', '')
# 按常见 shell 操作符拆分
segments = re.split(r'&&|\|\||[;|\n]', cmd)

# 允许片段前有若干 KEY=VALUE 形式的环境变量赋值
env_pfx = r'(?:[A-Za-z_][A-Za-z0-9_]*=[^\s]*\s+)*'

checks = [
    (rf'^\s*{env_pfx}git\s+(?:add|commit|push|reset|restore|rm|merge|rebase|cherry-pick)\b',
     'git 写操作 / 历史变更操作'),
    (rf'^\s*{env_pfx}git\s+tag\s+(?:-[adsfADSF]|[a-zA-Z0-9])',
     'git tag 写操作（创建/删除标签）'),
    (rf'^\s*{env_pfx}git\s+branch\s+(?:-d|-D|--delete)\b',
     'git 删除分支'),
    (rf'^\s*{env_pfx}git\s+stash\s+(?:drop|pop|clear)\b',
     'git stash 销毁操作'),
    (rf'^\s*{env_pfx}gh\s+pr\s+(?:create|merge|close|edit)\b',
     'gh PR 操作（create/merge/close/edit）'),
    (rf'^\s*{env_pfx}gh\s+release\s+create\b',
     'gh release create（创建发布版本）'),
    (rf'^\s*{env_pfx}gh\s+repo\s+delete\b',
     'gh repo delete（删除仓库）'),
    (rf'^\s*{env_pfx}gh\s+issue\s+(?:close|delete)\b',
     'gh issue close/delete'),
]

for seg in segments:
    seg = seg.strip()
    if not seg:
        continue
    for pattern, reason in checks:
        if re.search(pattern, seg, re.IGNORECASE):
            print(reason)
            sys.exit(0)
" 2>/dev/null)

  [ -z "$REASON" ] && exit 0

# ── 分支 2：GitHub MCP 写操作 ──────────────────────────────────────────────────
elif printf '%s' "$TOOL_NAME" | grep -qiE '^mcp_github_(create_pull_request|merge_pull_request|push_files|create_or_update_file|create_branch|create_repository|fork_repository|update_pull_request_branch|create_pull_request_review|add_issue_comment|update_issue|create_issue)$'; then

  # 提取关键参数作为摘要展示
  COMMAND=$(printf '%s' "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    ti = d.get('toolInput', {})
    keys = ['title', 'path', 'branch', 'base', 'head', 'pull_number', 'issue_number', 'owner', 'repo']
    parts = [f'{k}={str(ti[k])[:60]}' for k in keys if k in ti]
    print(', '.join(parts) if parts else '(无参数摘要)')
except Exception:
    print('(解析失败)')
" 2>/dev/null || echo "(解析失败)")

  REASON="GitHub MCP 写操作: $TOOL_NAME"

else
  exit 0
fi

REASON="$REASON" COMMAND="$COMMAND" python3 -c "
import json, os
reason = os.environ.get('REASON', '')
command = os.environ.get('COMMAND', '')
output = {
    'hookSpecificOutput': {
        'hookEventName': 'PreToolUse',
        'permissionDecision': 'ask',
        'permissionDecisionReason': (
            '⛔ 检测到需要用户明确授权的操作\n'
            '类型: ' + reason + '\n'
            '命令: ' + command + '\n\n'
            '根据项目规范，AI 不得自行发起此类操作。\n'
            '请确认：你是否已明确指示执行此命令？'
        )
    }
}
print(json.dumps(output))
"
exit 0
