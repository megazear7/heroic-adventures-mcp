import type { Context } from '@netlify/functions';
import { handleMcpRequest } from 'static-mcpify/web-handler';
import path from 'path';

const contentDir = path.join(process.cwd(), 'mcp/content');

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method === 'GET') {
    return new Response(JSON.stringify({ status: 'ok', server: 'adventure-mcp' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return handleMcpRequest(contentDir, req);
};

export const config = {
  path: '/mcp',
  includedFiles: ['../../mcp/content/**'],
};
