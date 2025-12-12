import mime from 'mime';
import { createReadStream, existsSync } from 'node:fs';
import type { ServerResponse } from 'node:http';
import path from 'node:path';
import type { HttpStatus } from '../http';
import { Response } from './Response';

export class FileResponse extends Response {
    public constructor(protected readonly pathLike: string, status?: HttpStatus) {
        super(status);

        const mimeType = mime.getType(path.extname(this.pathLike));

        if (mimeType) {
            this.headers.set('Content-Type', mimeType);
        }
    }

    public override async send(handler: ServerResponse): Promise<void> {
        if (!existsSync(this.pathLike)) {
            handler.statusCode = 404;
            handler.end();

            return;
        }

        await super.send(handler);

        createReadStream(this.pathLike).pipe(handler);
    }
}
