import { HttpStatus } from '../http';

export class Response {
    public readonly headers: Map<string, string>;

    public constructor(
        public readonly content: string,
        public readonly status: HttpStatus = HttpStatus.OK,
    ) {
        this.headers = new Map();
    }
}
