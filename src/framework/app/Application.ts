import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import type { HttpMethod } from '../http';
import { Request } from '../request';
import { JsonResponse, type Response } from '../response';

export abstract class Application {
    public readonly host = '127.0.0.1';
    public readonly port = 3000;

    public serve(): void {
        const server = createServer((request, response) => {
            this.handle(request, response);
        });

        server.listen(this.port, this.host, () => {
            console.info(`Server running at http://${this.host}:${this.port}/`);
        });
    }

    private makeRequestFromIncomingMessage(message: IncomingMessage): Request {
        if (message.method === undefined) {
            throw new Error('Method is required!');
        }

        if (message.url === undefined) {
            throw new Error('URL is required!');
        }

        return new Request(
            message.method as HttpMethod,
            `http://${this.host}:${this.port}${message.url}`,
        );
    }

    private handle(message: IncomingMessage, responseHandler: ServerResponse): void {
        let response: Response;

        try {
            response = this.handleRequest(this.makeRequestFromIncomingMessage(message));
        } catch (error) {
            response = new JsonResponse({
                name: error instanceof Error ? error.name : null,
                message: error instanceof Error ? error.message : null,
                error,
                stack: error instanceof Error ? error.stack : null,
            }, 500);
        }

        responseHandler.statusCode = response.status;

        for (const [key, value] of response.headers.entries()) {
            responseHandler.setHeader(key, value);
        }

        responseHandler.end(response.content);
    }

    private handleRequest(request: Request): Response {
        try {
            return this.onRequest(request);
        } catch (error) {
            return new JsonResponse(error, 500);
        }
    }

    protected abstract onRequest(request: Request): Response;
}
