import type { HttpMethod } from '../http/HttpMethod';

export class Request {
    public readonly url: URL;

    public constructor(public readonly method: HttpMethod, url: string) {
        this.url = new URL(url);
    }
}
