import { HttpStatus } from '../http';
import { Response } from './Response';

export class JsonResponse extends Response {
    public constructor(data: unknown, status: HttpStatus = HttpStatus.OK) {
        super(JSON.stringify(data), status);

        this.headers.set('Content-Type', 'application/json');
    }
}
