import { Application, JsonResponse, type Request } from '../framework';

export class App extends Application {
    protected override onRequest(request: Request): JsonResponse {
        return new JsonResponse({
            path: request.url.pathname,
            params: Object.fromEntries(request.url.searchParams.entries()),
        });
    }
}
