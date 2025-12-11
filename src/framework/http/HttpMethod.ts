/**
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods}
 */
export enum HttpMethod {
    /**
     * The `GET` method requests a representation of the specified resource.
     * Requests using `GET` should only retrieve data and should not contain a request content.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/GET}
     */
    Get = 'GET',

    /**
     * The `HEAD` method asks for a response identical to a `GET` request, but without a response body.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/HEAD}
     */
    Head = 'HEAD',

    /**
     * The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/POST}
     */
    Post = 'POST',

    /**
     * The `PUT` method replaces all current representations of the target resource with the request content.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/PUT}
     */
    Put = 'PUT',

    /**
     * The `DELETE` method deletes the specified resource.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/DELETE}
     */
    Delete = 'DELETE',

    /**
     * The `CONNECT` method establishes a tunnel to the server identified by the target resource.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/CONNECT}
     */
    Connect = 'CONNECT',

    /**
     * The `OPTIONS` method describes the communication options for the target resource.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/OPTIONS}
     */
    Options = 'OPTIONS',

    /**
     * The `TRACE` method performs a message loop-back test along the path to the target resource.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/TRACE}
     */
    Trace = 'TRACE',

    /**
     * The `PATCH` method applies partial modifications to a resource.
     *
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Methods/PATCH}
     */
    Patch = 'PATCH',
}
