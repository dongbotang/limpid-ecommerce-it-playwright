import { APIResponse } from "playwright";
import { CONFIG } from "../../model/config";
import { HttpRequest } from "../../util/httpRequest";

export class ProductQuerier {
    private readonly URL_LIST_ALL_PRODUCTS = `/items`;
    private readonly URL_LIST_PRODUCT_BY_ID = `/item/`;

    private _id: string;
    private _page: number = 0;
    private _size: number = 25;

    constructor() {}

    async query(): Promise<APIResponse> {
        return (new HttpRequest()).setUrl(this.url())
            .setHeader(HttpRequest.HEADER_KEY_ACCEPT, HttpRequest.HEADER_VALUE_APPLICATION_JSON).get();
    }

    setId(id: string): ProductQuerier {
        this._id = id;
        return this;
    }
    
    private url(): string {
        let url = CONFIG.URL_BASE;
        if (this._id == undefined) {
            url += this.URL_LIST_ALL_PRODUCTS;
        } else {
            url += this.URL_LIST_PRODUCT_BY_ID + this._id;
        }
        return url;
    }
}