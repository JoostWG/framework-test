/**
 * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status}
 */
export enum HttpStatus {
    // 100

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/100}
     */
    Continue = 100,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/101}
     */
    SwitchingProtocols = 101,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/102}
     */
    Processing = 102,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/103}
     */
    EarlyHints = 103,

    // 200

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/200}
     */
    OK = 200,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/201}
     */
    Created = 201,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/202}
     */
    Accepted = 202,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/204}
     */
    NoContent = 204,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/205}
     */
    ResetContent = 205,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/206}
     */
    PartialContent = 206,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/207}
     */
    MultiStatus = 207,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/208}
     */
    AlreadyReported = 208,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/226}
     */
    IMUsed = 226,

    // 300

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/303}
     */
    SeeOther = 303,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/304}
     */
    NotModified = 304,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/307}
     */
    TemporaryRedirect = 307,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/308}
     */
    PermanentRedirect = 308,

    // 400

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/400}
     */
    BadRequest = 400,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/401}
     */
    Unauthorized = 401,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/402}
     */
    PaymentRequired = 402,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/403}
     */
    Forbidden = 403,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/404}
     */
    NotFound = 404,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/405}
     */
    MethodNotAllowed = 405,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/406}
     */
    NotAcceptable = 406,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/407}
     */
    ProxyAuthenticationRequired = 407,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/408}
     */
    RequestTimeout = 408,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/409}
     */
    Conflict = 409,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/410}
     */
    Gone = 410,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/411}
     */
    LengthRequired = 411,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/412}
     */
    PreconditionFailed = 412,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/413}
     */
    ContentTooLarge = 413,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/414}
     */
    URITooLong = 414,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/415}
     */
    UnsupportedMediaType = 415,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/416}
     */
    RangeNotSatisfiable = 416,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/417}
     */
    ExpectationFailed = 417,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/418}
     */
    ImATeapot = 418,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/421}
     */
    MisdirectedRequest = 421,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/422}
     */
    UnprocessableContent = 422,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/423}
     */
    Locked = 423,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/424}
     */
    FailedDependency = 424,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/425}
     */
    TooEarly = 425,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/426}
     */
    UpgradeRequired = 426,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/428}
     */
    PreconditionRequired = 428,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/429}
     */
    TooManyRequests = 429,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/431}
     */
    RequestHeaderFieldsTooLarge = 431,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/451}
     */
    UnavailableForLegalReasons = 451,

    // 500

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/500}
     */
    InternalServerError = 500,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/501}
     */
    NotImplemented = 501,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/502}
     */
    BadGateway = 502,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/503}
     */
    ServiceUnavailable = 503,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/504}
     */
    GatewayTimeout = 504,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/505}
     */
    HTTPVersionNotSupported = 505,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/506}
     */
    VariantAlsoNegotiates = 506,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/507}
     */
    InsufficientStorage = 507,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/508}
     */
    LoopDetected = 508,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/510}
     */
    NotExtended = 510,

    /**
     * {@link https://developer.mozilla.org/docs/Web/HTTP/Reference/Status/511}
     */
    NetworkAuthenticationRequired = 511,
}
