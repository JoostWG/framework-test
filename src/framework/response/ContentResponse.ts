import type { ServerResponse } from 'node:http';
import type { HttpStatus } from '../http';
import { Response } from './Response';

export class ContentResponse extends Response {
    public constructor(protected readonly content: string, status?: HttpStatus) {
        super(status);
    }

    public override async send(handler: ServerResponse): Promise<void> {
        await super.send(handler);

        handler.end(this.content);
    }
}
