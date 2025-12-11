import { createServer } from 'node:http';

export class App {
    public serve(): void {
        const hostname = '127.0.0.1';
        const port = 3000;

        const server = createServer((request, response) => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Hello World');
        });

        server.listen(port, hostname, () => {
            console.info(`Server running at http://${hostname}:${port}/`);
        });
    }
}
