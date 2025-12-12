import type { ServerResponse } from 'node:http';
import { HttpStatus } from '../http';

export class Response {
    public readonly headers: Map<string, string>;

    public constructor(
        public readonly content: string,
        public readonly status: HttpStatus = HttpStatus.OK,
    ) {
        this.headers = new Map();
    }

    public async send(handler: ServerResponse): Promise<void> {
        handler.statusCode = this.status;

        for (const [key, value] of this.headers.entries()) {
            handler.setHeader(key, value);
        }

        handler.end(this.content);
    }
}
