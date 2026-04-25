import { describe, it, expect, beforeAll } from 'vitest';
import { createBangumiClient } from '../../src/client.js';

/**
 * 集成测试：发送真实网络请求到 https://api.bgm.tv
 * 运行前确保网络可用
 */
describe('RevisionAPI 集成测试', () => {
  const bgm = createBangumiClient();

  // 人物 ID 9512（浜崎あゆみ）有编辑历史
  const testPersonId = 9512;

  describe('getPersonRevisions() — 获取人物编辑历史列表', () => {
    it('返回 HTTP 200 且包含必要字段', async () => {
      const result = await bgm.revisions.getPersonRevisions(testPersonId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.total).toBe('number');
      expect(Array.isArray(result.data!.data)).toBe(true);
    });

    it('分页参数生效：limit=2', async () => {
      const result = await bgm.revisions.getPersonRevisions(testPersonId, { limit: 2 });

      expect(result.response.status).toBe(200);
      expect(result.data!.data!.length).toBeLessThanOrEqual(2);
    });

    it('传入 person_id=0 返回 400', async () => {
      const result = await bgm.revisions.getPersonRevisions(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });
  });

  describe('getPersonRevisionByRevisionId() — 获取人物单条编辑历史', () => {
    let knownRevisionId = 0;

    beforeAll(async () => {
      const r = await bgm.revisions.getPersonRevisions(testPersonId, { limit: 1 });
      knownRevisionId = r.data?.data?.[0]?.id ?? 0;
    });

    it('返回 HTTP 200 且包含必要字段', async () => {
      if (!knownRevisionId) return;
      const result = await bgm.revisions.getPersonRevisionByRevisionId(knownRevisionId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.id).toBe('number');
      expect(typeof result.data!.type).toBe('number');
      expect(typeof result.data!.summary).toBe('string');
      expect(typeof result.data!.created_at).toBe('string');
    });

    it('传入 revision_id=0 返回 400', async () => {
      const result = await bgm.revisions.getPersonRevisionByRevisionId(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });

    it('传入不存在的 revision_id 返回 404', async () => {
      const result = await bgm.revisions.getPersonRevisionByRevisionId(999999999);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(404);
    });
  });

  // 角色 ID 1（紫野永远）有编辑历史
  const testCharacterId = 1;

  describe('getCharacterRevisions() — 获取角色编辑历史列表', () => {
    it('返回 HTTP 200 且包含必要字段', async () => {
      const result = await bgm.revisions.getCharacterRevisions(testCharacterId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.total).toBe('number');
      expect(Array.isArray(result.data!.data)).toBe(true);
    });

    it('分页参数生效：limit=2', async () => {
      const result = await bgm.revisions.getCharacterRevisions(testCharacterId, { limit: 2 });

      expect(result.response.status).toBe(200);
      expect(result.data!.data!.length).toBeLessThanOrEqual(2);
    });

    it('传入 character_id=0 返回 400', async () => {
      const result = await bgm.revisions.getCharacterRevisions(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });
  });

  describe('getCharacterRevisionByRevisionId() — 获取角色单条编辑历史', () => {
    let knownRevisionId = 0;

    beforeAll(async () => {
      const r = await bgm.revisions.getCharacterRevisions(testCharacterId, { limit: 1 });
      knownRevisionId = r.data?.data?.[0]?.id ?? 0;
    });

    it('返回 HTTP 200 且包含必要字段', async () => {
      if (!knownRevisionId) return;
      const result = await bgm.revisions.getCharacterRevisionByRevisionId(knownRevisionId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.id).toBe('number');
      expect(typeof result.data!.type).toBe('number');
      expect(typeof result.data!.summary).toBe('string');
      expect(typeof result.data!.created_at).toBe('string');
    });

    it('传入 revision_id=0 返回 400', async () => {
      const result = await bgm.revisions.getCharacterRevisionByRevisionId(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });

    it('传入不存在的 revision_id 返回 404', async () => {
      const result = await bgm.revisions.getCharacterRevisionByRevisionId(999999999);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(404);
    });
  });

  const testSubjectId = 8;

  describe('getSubjectRevisions() — 获取条目编辑历史列表', () => {
    it('返回 HTTP 200 且包含必要字段', async () => {
      const result = await bgm.revisions.getSubjectRevisions(testSubjectId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.total).toBe('number');
      expect(Array.isArray(result.data!.data)).toBe(true);
    });

    it('分页参数生效：limit=2', async () => {
      const result = await bgm.revisions.getSubjectRevisions(testSubjectId, { limit: 2 });

      expect(result.response.status).toBe(200);
      expect(result.data!.data!.length).toBeLessThanOrEqual(2);
    });

    it('传入 subject_id=0 返回 400', async () => {
      const result = await bgm.revisions.getSubjectRevisions(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });
  });

  describe('getSubjectRevisionByRevisionId() — 获取条目单条编辑历史', () => {
    let knownRevisionId = 0;

    beforeAll(async () => {
      const r = await bgm.revisions.getSubjectRevisions(testSubjectId, { limit: 1 });
      knownRevisionId = r.data?.data?.[0]?.id ?? 0;
    });

    it('返回 HTTP 200 且包含必要字段', async () => {
      if (!knownRevisionId) return;
      const result = await bgm.revisions.getSubjectRevisionByRevisionId(knownRevisionId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.id).toBe('number');
      expect(typeof result.data!.type).toBe('number');
      expect(typeof result.data!.summary).toBe('string');
      expect(typeof result.data!.created_at).toBe('string');
    });

    it('传入 revision_id=0 返回 400', async () => {
      const result = await bgm.revisions.getSubjectRevisionByRevisionId(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });

    it('传入不存在的 revision_id 返回 404', async () => {
      const result = await bgm.revisions.getSubjectRevisionByRevisionId(999999999);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(404);
    });
  });

  const testEpisodeId = 1;

  describe('getEpisodeRevisions() — 获取章节编辑历史列表', () => {
    it('返回 HTTP 200 且包含必要字段', async () => {
      const result = await bgm.revisions.getEpisodeRevisions(testEpisodeId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.total).toBe('number');
      expect(Array.isArray(result.data!.data)).toBe(true);
    });

    it('分页参数生效：limit=2', async () => {
      const result = await bgm.revisions.getEpisodeRevisions(testEpisodeId, { limit: 2 });

      expect(result.response.status).toBe(200);
      expect(result.data!.data!.length).toBeLessThanOrEqual(2);
    });

    it('传入 episode_id=0 返回 400', async () => {
      const result = await bgm.revisions.getEpisodeRevisions(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });
  });

  describe('getEpisodeRevisionByRevisionId() — 获取章节单条编辑历史', () => {
    let knownRevisionId = 0;

    beforeAll(async () => {
      const r = await bgm.revisions.getEpisodeRevisions(testEpisodeId, { limit: 1 });
      knownRevisionId = r.data?.data?.[0]?.id ?? 0;
    });

    it('返回 HTTP 200 且包含必要字段', async () => {
      if (!knownRevisionId) return;
      const result = await bgm.revisions.getEpisodeRevisionByRevisionId(knownRevisionId);

      expect(result.error).toBeUndefined();
      expect(result.data).toBeDefined();
      expect(result.response.status).toBe(200);
      expect(typeof result.data!.id).toBe('number');
      expect(typeof result.data!.type).toBe('number');
      expect(typeof result.data!.summary).toBe('string');
      expect(typeof result.data!.created_at).toBe('string');
    });

    it('传入 revision_id=0 返回 400', async () => {
      const result = await bgm.revisions.getEpisodeRevisionByRevisionId(0);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(400);
    });

    it('传入不存在的 revision_id 返回 404', async () => {
      const result = await bgm.revisions.getEpisodeRevisionByRevisionId(999999999);

      expect(result.data).toBeUndefined();
      expect(result.error).toBeDefined();
      expect(result.response.status).toBe(404);
    });
  });
});
