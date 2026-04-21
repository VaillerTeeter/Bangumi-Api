export * from './generated/index.js';
export { client } from './generated/client.gen.js';
/**
 * Configure the Bangumi API client with an access token.
 *
 * @param accessToken - Bearer token from https://next.bgm.tv/demo/access-token
 * @param userAgent   - Required User-Agent header (see https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)
 */
export declare function configureBangumiClient(accessToken: string, userAgent: string): void;
//# sourceMappingURL=index.d.ts.map