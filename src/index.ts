export * from './generated/index.js';
export { client } from './generated/client.gen.js';

import { client } from './generated/client.gen.js';

/**
 * Configure the Bangumi API client with an access token.
 *
 * @param accessToken - Bearer token from https://next.bgm.tv/demo/access-token
 * @param userAgent   - Required User-Agent header (see https://github.com/bangumi/api/blob/master/docs-raw/user%20agent.md)
 */
export function configureBangumiClient(accessToken: string, userAgent: string): void {
  client.setConfig({
    baseUrl: 'https://api.bgm.tv',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': userAgent,
    },
  });
}
