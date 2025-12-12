import { Application, FileResponse, type Request } from '../framework';

export class App extends Application {
    protected override async onRequest(request: Request): Promise<FileResponse> {
        console.info(`${request.method} ${request.url.pathname}${request.url.search}`);

        return new FileResponse(`public${request.url.pathname}`);
    }
}
