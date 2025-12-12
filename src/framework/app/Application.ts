import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import type { HttpMethod } from '../http';
import { Request } from '../request';
import { JsonResponse, type Response } from '../response';

export abstract class Application {
    public readonly host = process.env.HOST;
    public readonly port = Number(process.env.PORT);

    public serve(): void {
        const server = createServer((request, response) => {
            this.handle(request, response).catch(console.error);
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

    private async handle(message: IncomingMessage, responseHandler: ServerResponse): Promise<void> {
        let response: Response;

        try {
            response = await this.onRequest(this.makeRequestFromIncomingMessage(message));
        } catch (error) {
            response = new JsonResponse({
                name: error instanceof Error ? error.name : null,
                message: error instanceof Error ? error.message : null,
                error,
                stack: error instanceof Error ? error.stack : null,
            }, 500);
        }

        await response.send(responseHandler);
    }

    protected abstract onRequest(request: Request): Promise<Response>;
}
