import playwright from 'playwright'

export class HttpRequest {
    static readonly HEADER_KEY_ACCEPT = 'accept';
    static readonly HEADER_KEY_CONTENT_TYPE = 'content-type';

    static readonly HEADER_VALUE_APPLICATION_JSON = 'application/json';
    static readonly HEADER_VALUE_TEXT_PLAIN = 'text/plain';
    static readonly HEADER_VALUE_ASTERISKS = '*/*';

    private _url: string;
    private _data: string;
    private _headers: Map<string, string> = new Map<string, string>;

    constructor() {};

    setUrl(url: string): HttpRequest {
        this._url = url;
        return this;
    }

    setHeader(key: string, value: string): HttpRequest {
        this._headers.set(key, value);
        return this;
    }

    setData(data: string): HttpRequest {
        this._data = data;
        return this;
    }

    async get(): Promise<any> {
        return (await playwright.request.newContext()).get(this._url, {
            headers: Object.fromEntries(this._headers)});
    }

    async post(): Promise<any> {
        return (await playwright.request.newContext()).get(this._url, {
            headers: Object.fromEntries(this._headers),
            data:  JSON.parse(this._data)});
    }
}