import { ApiStatusResponse, ApiUploadProps, StatusOptions, UploadOptions } from '../../types';
import { JOB_STATUS } from '../../constants';
interface Options extends UploadOptions, StatusOptions {
    maxApiStatusCalls?: number;
    onStatusProgress?: (status: JOB_STATUS) => any;
}
export declare const upload: (props: ApiUploadProps, options?: Options) => Promise<ApiStatusResponse>;
export {};
