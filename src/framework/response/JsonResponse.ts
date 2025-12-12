import type { HttpStatus } from '../http';
import { ContentResponse } from './ContentResponse';

export class JsonResponse extends ContentResponse {
    public constructor(data: unknown, status?: HttpStatus) {
        super(JSON.stringify(data), status);

        this.headers.set('Content-Type', 'application/json');
    }
}
