/// <reference types="node" />
import { RequestOptions } from 'https';
import * as FormData from 'form-data';
interface Params extends RequestOptions {
    formData: FormData;
}
export declare const request: (props: Params) => Promise<any>;
export {};
