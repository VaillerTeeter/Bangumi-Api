import type { Client, Options as Options2, TDataShape } from './client/index.js';
import type { AddSubjectToIndexByIndexIdData, AddSubjectToIndexByIndexIdErrors, AddSubjectToIndexByIndexIdResponses, CollectCharacterByCharacterIdAndUserIdData, CollectCharacterByCharacterIdAndUserIdErrors, CollectCharacterByCharacterIdAndUserIdResponses, CollectIndexByIndexIdAndUserIdData, CollectIndexByIndexIdAndUserIdErrors, CollectIndexByIndexIdAndUserIdResponses, CollectPersonByPersonIdAndUserIdData, CollectPersonByPersonIdAndUserIdErrors, CollectPersonByPersonIdAndUserIdResponses, DelelteSubjectFromIndexByIndexIdAndSubjectIdData, DelelteSubjectFromIndexByIndexIdAndSubjectIdErrors, DelelteSubjectFromIndexByIndexIdAndSubjectIdResponses, EditIndexByIdData, EditIndexByIdErrors, EditIndexByIdResponses, EditIndexSubjectsByIndexIdAndSubjectIdData, EditIndexSubjectsByIndexIdAndSubjectIdErrors, EditIndexSubjectsByIndexIdAndSubjectIdResponses, GetCalendarData, GetCalendarResponses, GetCharacterByIdData, GetCharacterByIdErrors, GetCharacterByIdResponses, GetCharacterImageByIdData, GetCharacterImageByIdErrors, GetCharacterRevisionByRevisionIdData, GetCharacterRevisionByRevisionIdErrors, GetCharacterRevisionByRevisionIdResponses, GetCharacterRevisionsData, GetCharacterRevisionsErrors, GetCharacterRevisionsResponses, GetEpisodeByIdData, GetEpisodeByIdErrors, GetEpisodeByIdResponses, GetEpisodeRevisionByRevisionIdData, GetEpisodeRevisionByRevisionIdErrors, GetEpisodeRevisionByRevisionIdResponses, GetEpisodeRevisionsData, GetEpisodeRevisionsErrors, GetEpisodeRevisionsResponses, GetEpisodesData, GetEpisodesErrors, GetEpisodesResponses, GetIndexByIdData, GetIndexByIdErrors, GetIndexByIdResponses, GetIndexSubjectsByIndexIdData, GetIndexSubjectsByIndexIdErrors, GetIndexSubjectsByIndexIdResponses, GetMyselfData, GetMyselfErrors, GetMyselfResponses, GetPersonByIdData, GetPersonByIdErrors, GetPersonByIdResponses, GetPersonImageByIdData, GetPersonImageByIdErrors, GetPersonRevisionByRevisionIdData, GetPersonRevisionByRevisionIdErrors, GetPersonRevisionByRevisionIdResponses, GetPersonRevisionsData, GetPersonRevisionsErrors, GetPersonRevisionsResponses, GetRelatedCharactersByPersonIdData, GetRelatedCharactersByPersonIdErrors, GetRelatedCharactersByPersonIdResponses, GetRelatedCharactersBySubjectIdData, GetRelatedCharactersBySubjectIdErrors, GetRelatedCharactersBySubjectIdResponses, GetRelatedPersonsByCharacterIdData, GetRelatedPersonsByCharacterIdErrors, GetRelatedPersonsByCharacterIdResponses, GetRelatedPersonsBySubjectIdData, GetRelatedPersonsBySubjectIdErrors, GetRelatedPersonsBySubjectIdResponses, GetRelatedSubjectsByCharacterIdData, GetRelatedSubjectsByCharacterIdErrors, GetRelatedSubjectsByCharacterIdResponses, GetRelatedSubjectsByPersonIdData, GetRelatedSubjectsByPersonIdErrors, GetRelatedSubjectsByPersonIdResponses, GetRelatedSubjectsBySubjectIdData, GetRelatedSubjectsBySubjectIdErrors, GetRelatedSubjectsBySubjectIdResponses, GetSubjectByIdData, GetSubjectByIdErrors, GetSubjectByIdResponses, GetSubjectImageByIdData, GetSubjectImageByIdErrors, GetSubjectRevisionByRevisionIdData, GetSubjectRevisionByRevisionIdErrors, GetSubjectRevisionByRevisionIdResponses, GetSubjectRevisionsData, GetSubjectRevisionsErrors, GetSubjectRevisionsResponses, GetSubjectsData, GetSubjectsErrors, GetSubjectsResponses, GetUserAvatarByNameData, GetUserAvatarByNameErrors, GetUserByNameData, GetUserByNameErrors, GetUserByNameResponses, GetUserCharacterCollectionData, GetUserCharacterCollectionErrors, GetUserCharacterCollectionResponses, GetUserCharacterCollectionsData, GetUserCharacterCollectionsErrors, GetUserCharacterCollectionsResponses, GetUserCollectionData, GetUserCollectionErrors, GetUserCollectionResponses, GetUserCollectionsByUsernameData, GetUserCollectionsByUsernameErrors, GetUserCollectionsByUsernameResponses, GetUserEpisodeCollectionData, GetUserEpisodeCollectionErrors, GetUserEpisodeCollectionResponses, GetUserPersonCollectionData, GetUserPersonCollectionErrors, GetUserPersonCollectionResponses, GetUserPersonCollectionsData, GetUserPersonCollectionsErrors, GetUserPersonCollectionsResponses, GetUserSubjectEpisodeCollectionData, GetUserSubjectEpisodeCollectionErrors, GetUserSubjectEpisodeCollectionResponses, NewIndexData, NewIndexErrors, NewIndexResponses, PatchUserCollectionData, PatchUserCollectionErrors, PatchUserCollectionResponses, PatchUserSubjectEpisodeCollectionData, PatchUserSubjectEpisodeCollectionErrors, PatchUserSubjectEpisodeCollectionResponses, PostUserCollectionData, PostUserCollectionErrors, PostUserCollectionResponses, PutUserEpisodeCollectionData, PutUserEpisodeCollectionErrors, PutUserEpisodeCollectionResponses, SearchCharactersData, SearchCharactersResponses, SearchPersonsData, SearchPersonsResponses, SearchSubjectsData, SearchSubjectsResponses, UncollectCharacterByCharacterIdAndUserIdData, UncollectCharacterByCharacterIdAndUserIdErrors, UncollectCharacterByCharacterIdAndUserIdResponses, UncollectIndexByIndexIdAndUserIdData, UncollectIndexByIndexIdAndUserIdErrors, UncollectIndexByIndexIdAndUserIdResponses, UncollectPersonByPersonIdAndUserIdData, UncollectPersonByPersonIdAndUserIdErrors, UncollectPersonByPersonIdAndUserIdResponses } from './types.gen.js';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean, TResponse = unknown> = Options2<TData, ThrowOnError, TResponse> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * 每日放送
 */
export declare const getCalendar: <ThrowOnError extends boolean = false>(options?: Options<GetCalendarData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetCalendarResponses, unknown, ThrowOnError, "fields">;
/**
 * 条目搜索
 *
 * ## 实验性 API， 本 schema 和实际的 API 行为都可能随时发生改动
 *
 * 目前支持的筛选条件包括:
 * - `type`: 条目类型，参照 `SubjectType` enum， `或`。
 * - `tag`: 标签，可以多次出现。`且` 关系。
 * - `air_date`: 播出日期/发售日期。`且` 关系。
 * - `rating`: 用于搜索指定评分的条目。`且` 关系。
 * - `rating_count`: 用于按照评分人数筛选条目。`且` 关系。
 * - `rank`: 用于搜索指定排名的条目。`且` 关系。
 * - `nsfw`: 使用 `include` 包含NSFW搜索结果。默认排除搜索NSFW条目。无权限情况下忽略此选项，不会返回NSFW条目。
 *
 * 不同筛选条件之间为 `且`
 *
 */
export declare const searchSubjects: <ThrowOnError extends boolean = false>(options?: Options<SearchSubjectsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<SearchSubjectsResponses, unknown, ThrowOnError, "fields">;
/**
 * 角色搜索
 *
 * ## 实验性 API， 本 schema 和实际的 API 行为都可能随时发生改动
 *
 * 目前支持的筛选条件包括:
 * - `nsfw`: 使用 `include` 包含NSFW搜索结果。默认排除搜索NSFW条目。无权限情况下忽略此选项，不会返回NSFW条目。
 *
 */
export declare const searchCharacters: <ThrowOnError extends boolean = false>(options?: Options<SearchCharactersData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<SearchCharactersResponses, unknown, ThrowOnError, "fields">;
/**
 * 人物搜索
 *
 * ## 实验性 API， 本 schema 和实际的 API 行为都可能随时发生改动
 *
 * 目前支持的筛选条件包括:
 * - `career`: 职业，可以多次出现。`且` 关系。
 *
 * 不同筛选条件之间为 `且`
 *
 */
export declare const searchPersons: <ThrowOnError extends boolean = false>(options?: Options<SearchPersonsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<SearchPersonsResponses, unknown, ThrowOnError, "fields">;
/**
 * 浏览条目
 *
 * 第一页会 cache 24h，之后会 cache 1h
 */
export declare const getSubjects: <ThrowOnError extends boolean = false>(options: Options<GetSubjectsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetSubjectsResponses, GetSubjectsErrors, ThrowOnError, "fields">;
/**
 * 获取条目
 *
 * cache with 300s
 */
export declare const getSubjectById: <ThrowOnError extends boolean = false>(options: Options<GetSubjectByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetSubjectByIdResponses, GetSubjectByIdErrors, ThrowOnError, "fields">;
/**
 * Get Subject Image
 */
export declare const getSubjectImageById: <ThrowOnError extends boolean = false>(options: Options<GetSubjectImageByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<unknown, GetSubjectImageByIdErrors, ThrowOnError, "fields">;
/**
 * Get Subject Persons
 */
export declare const getRelatedPersonsBySubjectId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedPersonsBySubjectIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedPersonsBySubjectIdResponses, GetRelatedPersonsBySubjectIdErrors, ThrowOnError, "fields">;
/**
 * Get Subject Characters
 */
export declare const getRelatedCharactersBySubjectId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedCharactersBySubjectIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedCharactersBySubjectIdResponses, GetRelatedCharactersBySubjectIdErrors, ThrowOnError, "fields">;
/**
 * Get Subject Relations
 */
export declare const getRelatedSubjectsBySubjectId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedSubjectsBySubjectIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedSubjectsBySubjectIdResponses, GetRelatedSubjectsBySubjectIdErrors, ThrowOnError, "fields">;
/**
 * Get Episodes
 */
export declare const getEpisodes: <ThrowOnError extends boolean = false>(options: Options<GetEpisodesData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetEpisodesResponses, GetEpisodesErrors, ThrowOnError, "fields">;
/**
 * Get Episode
 */
export declare const getEpisodeById: <ThrowOnError extends boolean = false>(options: Options<GetEpisodeByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetEpisodeByIdResponses, GetEpisodeByIdErrors, ThrowOnError, "fields">;
/**
 * Get Character Detail
 *
 * cache with 60s
 */
export declare const getCharacterById: <ThrowOnError extends boolean = false>(options: Options<GetCharacterByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetCharacterByIdResponses, GetCharacterByIdErrors, ThrowOnError, "fields">;
/**
 * Get Character Image
 */
export declare const getCharacterImageById: <ThrowOnError extends boolean = false>(options: Options<GetCharacterImageByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<unknown, GetCharacterImageByIdErrors, ThrowOnError, "fields">;
/**
 * get character related subjects
 */
export declare const getRelatedSubjectsByCharacterId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedSubjectsByCharacterIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedSubjectsByCharacterIdResponses, GetRelatedSubjectsByCharacterIdErrors, ThrowOnError, "fields">;
/**
 * get character related persons
 */
export declare const getRelatedPersonsByCharacterId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedPersonsByCharacterIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedPersonsByCharacterIdResponses, GetRelatedPersonsByCharacterIdErrors, ThrowOnError, "fields">;
/**
 * Uncollect character for current user
 *
 * 为当前用户取消收藏角色
 */
export declare const uncollectCharacterByCharacterIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<UncollectCharacterByCharacterIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<UncollectCharacterByCharacterIdAndUserIdResponses, UncollectCharacterByCharacterIdAndUserIdErrors, ThrowOnError, "fields">;
/**
 * Collect character for current user
 *
 * 为当前用户收藏角色
 */
export declare const collectCharacterByCharacterIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<CollectCharacterByCharacterIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<CollectCharacterByCharacterIdAndUserIdResponses, CollectCharacterByCharacterIdAndUserIdErrors, ThrowOnError, "fields">;
/**
 * Get Person
 *
 * cache with 60s
 */
export declare const getPersonById: <ThrowOnError extends boolean = false>(options: Options<GetPersonByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetPersonByIdResponses, GetPersonByIdErrors, ThrowOnError, "fields">;
/**
 * Get Person Image
 */
export declare const getPersonImageById: <ThrowOnError extends boolean = false>(options: Options<GetPersonImageByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<unknown, GetPersonImageByIdErrors, ThrowOnError, "fields">;
/**
 * get person related subjects
 */
export declare const getRelatedSubjectsByPersonId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedSubjectsByPersonIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedSubjectsByPersonIdResponses, GetRelatedSubjectsByPersonIdErrors, ThrowOnError, "fields">;
/**
 * get person related characters
 */
export declare const getRelatedCharactersByPersonId: <ThrowOnError extends boolean = false>(options: Options<GetRelatedCharactersByPersonIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetRelatedCharactersByPersonIdResponses, GetRelatedCharactersByPersonIdErrors, ThrowOnError, "fields">;
/**
 * Uncollect person for current user
 *
 * 为当前用户取消收藏人物
 */
export declare const uncollectPersonByPersonIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<UncollectPersonByPersonIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<UncollectPersonByPersonIdAndUserIdResponses, UncollectPersonByPersonIdAndUserIdErrors, ThrowOnError, "fields">;
/**
 * Collect person for current user
 *
 * 为当前用户收藏人物
 */
export declare const collectPersonByPersonIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<CollectPersonByPersonIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<CollectPersonByPersonIdAndUserIdResponses, CollectPersonByPersonIdAndUserIdErrors, ThrowOnError, "fields">;
/**
 * Get User by name
 *
 * 获取用户信息
 */
export declare const getUserByName: <ThrowOnError extends boolean = false>(options: Options<GetUserByNameData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserByNameResponses, GetUserByNameErrors, ThrowOnError, "fields">;
/**
 * Get User Avatar by name
 *
 * 获取用户头像，302 重定向至头像地址，设置了 username 之后无法使用 UID 查询。
 */
export declare const getUserAvatarByName: <ThrowOnError extends boolean = false>(options: Options<GetUserAvatarByNameData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<unknown, GetUserAvatarByNameErrors, ThrowOnError, "fields">;
/**
 * Get User
 *
 * 返回当前 Access Token 对应的用户信息
 */
export declare const getMyself: <ThrowOnError extends boolean = false>(options?: Options<GetMyselfData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetMyselfResponses, GetMyselfErrors, ThrowOnError, "fields">;
/**
 * 获取用户收藏
 *
 * 获取对应用户的收藏，查看私有收藏需要access token。
 */
export declare const getUserCollectionsByUsername: <ThrowOnError extends boolean = false>(options: Options<GetUserCollectionsByUsernameData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserCollectionsByUsernameResponses, GetUserCollectionsByUsernameErrors, ThrowOnError, "fields">;
/**
 * 获取用户单个条目收藏
 *
 * 获取对应用户的收藏，查看私有收藏需要 access token
 */
export declare const getUserCollection: <ThrowOnError extends boolean = false>(options: Options<GetUserCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserCollectionResponses, GetUserCollectionErrors, ThrowOnError, "fields">;
/**
 * 修改用户单个收藏
 *
 * 修改条目收藏状态
 *
 * 由于直接修改剧集条目的完成度可能会引起意料之外效果，只能用于修改书籍类条目的完成度。
 *
 * PATCH 方法的所有请求体字段均可选
 *
 */
export declare const patchUserCollection: <ThrowOnError extends boolean = false>(options: Options<PatchUserCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<PatchUserCollectionResponses, PatchUserCollectionErrors, ThrowOnError, "fields">;
/**
 * 新增或修改用户单个条目收藏
 *
 * 修改条目收藏状态, 如果不存在则创建，如果存在则修改
 *
 * 由于直接修改剧集条目的完成度可能会引起意料之外效果，只能用于修改书籍类条目的完成度。
 *
 * 方法的所有请求体字段均可选
 *
 */
export declare const postUserCollection: <ThrowOnError extends boolean = false>(options: Options<PostUserCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<PostUserCollectionResponses, PostUserCollectionErrors, ThrowOnError, "fields">;
/**
 * 章节收藏信息
 */
export declare const getUserSubjectEpisodeCollection: <ThrowOnError extends boolean = false>(options: Options<GetUserSubjectEpisodeCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserSubjectEpisodeCollectionResponses, GetUserSubjectEpisodeCollectionErrors, ThrowOnError, "fields">;
/**
 * 章节收藏信息
 *
 * 同时会重新计算条目的完成度
 *
 */
export declare const patchUserSubjectEpisodeCollection: <ThrowOnError extends boolean = false>(options: Options<PatchUserSubjectEpisodeCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<PatchUserSubjectEpisodeCollectionResponses, PatchUserSubjectEpisodeCollectionErrors, ThrowOnError, "fields">;
/**
 * 章节收藏信息
 */
export declare const getUserEpisodeCollection: <ThrowOnError extends boolean = false>(options: Options<GetUserEpisodeCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserEpisodeCollectionResponses, GetUserEpisodeCollectionErrors, ThrowOnError, "fields">;
/**
 * 更新章节收藏信息
 */
export declare const putUserEpisodeCollection: <ThrowOnError extends boolean = false>(options: Options<PutUserEpisodeCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<PutUserEpisodeCollectionResponses, PutUserEpisodeCollectionErrors, ThrowOnError, "fields">;
/**
 * 获取用户角色收藏列表
 */
export declare const getUserCharacterCollections: <ThrowOnError extends boolean = false>(options: Options<GetUserCharacterCollectionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserCharacterCollectionsResponses, GetUserCharacterCollectionsErrors, ThrowOnError, "fields">;
/**
 * 获取用户单个角色收藏信息
 */
export declare const getUserCharacterCollection: <ThrowOnError extends boolean = false>(options: Options<GetUserCharacterCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserCharacterCollectionResponses, GetUserCharacterCollectionErrors, ThrowOnError, "fields">;
/**
 * 获取用户人物收藏列表
 */
export declare const getUserPersonCollections: <ThrowOnError extends boolean = false>(options: Options<GetUserPersonCollectionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserPersonCollectionsResponses, GetUserPersonCollectionsErrors, ThrowOnError, "fields">;
/**
 * 获取用户单个人物收藏信息
 */
export declare const getUserPersonCollection: <ThrowOnError extends boolean = false>(options: Options<GetUserPersonCollectionData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetUserPersonCollectionResponses, GetUserPersonCollectionErrors, ThrowOnError, "fields">;
/**
 * Get Person Revisions
 */
export declare const getPersonRevisions: <ThrowOnError extends boolean = false>(options: Options<GetPersonRevisionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetPersonRevisionsResponses, GetPersonRevisionsErrors, ThrowOnError, "fields">;
/**
 * Get Person Revision
 */
export declare const getPersonRevisionByRevisionId: <ThrowOnError extends boolean = false>(options: Options<GetPersonRevisionByRevisionIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetPersonRevisionByRevisionIdResponses, GetPersonRevisionByRevisionIdErrors, ThrowOnError, "fields">;
/**
 * Get Character Revisions
 */
export declare const getCharacterRevisions: <ThrowOnError extends boolean = false>(options: Options<GetCharacterRevisionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetCharacterRevisionsResponses, GetCharacterRevisionsErrors, ThrowOnError, "fields">;
/**
 * Get Character Revision
 */
export declare const getCharacterRevisionByRevisionId: <ThrowOnError extends boolean = false>(options: Options<GetCharacterRevisionByRevisionIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetCharacterRevisionByRevisionIdResponses, GetCharacterRevisionByRevisionIdErrors, ThrowOnError, "fields">;
/**
 * Get Subject Revisions
 */
export declare const getSubjectRevisions: <ThrowOnError extends boolean = false>(options: Options<GetSubjectRevisionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetSubjectRevisionsResponses, GetSubjectRevisionsErrors, ThrowOnError, "fields">;
/**
 * Get Subject Revision
 */
export declare const getSubjectRevisionByRevisionId: <ThrowOnError extends boolean = false>(options: Options<GetSubjectRevisionByRevisionIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetSubjectRevisionByRevisionIdResponses, GetSubjectRevisionByRevisionIdErrors, ThrowOnError, "fields">;
/**
 * Get Episode Revisions
 */
export declare const getEpisodeRevisions: <ThrowOnError extends boolean = false>(options: Options<GetEpisodeRevisionsData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetEpisodeRevisionsResponses, GetEpisodeRevisionsErrors, ThrowOnError, "fields">;
/**
 * Get Episode Revision
 */
export declare const getEpisodeRevisionByRevisionId: <ThrowOnError extends boolean = false>(options: Options<GetEpisodeRevisionByRevisionIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetEpisodeRevisionByRevisionIdResponses, GetEpisodeRevisionByRevisionIdErrors, ThrowOnError, "fields">;
/**
 * Create a new index
 */
export declare const newIndex: <ThrowOnError extends boolean = false>(options?: Options<NewIndexData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<NewIndexResponses, NewIndexErrors, ThrowOnError, "fields">;
/**
 * Get Index By ID
 */
export declare const getIndexById: <ThrowOnError extends boolean = false>(options: Options<GetIndexByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetIndexByIdResponses, GetIndexByIdErrors, ThrowOnError, "fields">;
/**
 * Edit index's information
 */
export declare const editIndexById: <ThrowOnError extends boolean = false>(options: Options<EditIndexByIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<EditIndexByIdResponses, EditIndexByIdErrors, ThrowOnError, "fields">;
/**
 * Get Index Subjects
 */
export declare const getIndexSubjectsByIndexId: <ThrowOnError extends boolean = false>(options: Options<GetIndexSubjectsByIndexIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<GetIndexSubjectsByIndexIdResponses, GetIndexSubjectsByIndexIdErrors, ThrowOnError, "fields">;
/**
 * Add a subject to Index
 */
export declare const addSubjectToIndexByIndexId: <ThrowOnError extends boolean = false>(options: Options<AddSubjectToIndexByIndexIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<AddSubjectToIndexByIndexIdResponses, AddSubjectToIndexByIndexIdErrors, ThrowOnError, "fields">;
/**
 * Delete a subject from a Index
 */
export declare const delelteSubjectFromIndexByIndexIdAndSubjectId: <ThrowOnError extends boolean = false>(options: Options<DelelteSubjectFromIndexByIndexIdAndSubjectIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<DelelteSubjectFromIndexByIndexIdAndSubjectIdResponses, DelelteSubjectFromIndexByIndexIdAndSubjectIdErrors, ThrowOnError, "fields">;
/**
 * Edit subject information in a index
 *
 * 如果条目不存在于目录，会创建该条目
 */
export declare const editIndexSubjectsByIndexIdAndSubjectId: <ThrowOnError extends boolean = false>(options: Options<EditIndexSubjectsByIndexIdAndSubjectIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<EditIndexSubjectsByIndexIdAndSubjectIdResponses, EditIndexSubjectsByIndexIdAndSubjectIdErrors, ThrowOnError, "fields">;
/**
 * Uncollect index for current user
 *
 * 为当前用户取消收藏一条目录
 */
export declare const uncollectIndexByIndexIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<UncollectIndexByIndexIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<UncollectIndexByIndexIdAndUserIdResponses, UncollectIndexByIndexIdAndUserIdErrors, ThrowOnError, "fields">;
/**
 * Collect index for current user
 *
 * 为当前用户收藏一条目录
 */
export declare const collectIndexByIndexIdAndUserId: <ThrowOnError extends boolean = false>(options: Options<CollectIndexByIndexIdAndUserIdData, ThrowOnError>) => import("./client/types.gen.js").RequestResult<CollectIndexByIndexIdAndUserIdResponses, CollectIndexByIndexIdAndUserIdErrors, ThrowOnError, "fields">;
//# sourceMappingURL=sdk.gen.d.ts.map