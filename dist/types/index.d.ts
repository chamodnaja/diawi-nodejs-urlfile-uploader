export interface ApiUploadProps {
    token: string;
    file: string;
    find_by_udid?: boolean;
    wall_of_apps?: boolean;
    password?: string;
    comment?: string;
    callback_url?: string;
    callback_emails?: string;
    installation_notifications?: boolean;
}
export interface UploadOptions {
    onUploadProgress?: (progressPercent: number, args: {
        bytesWritten: number;
        fileSize: number;
    }) => any;
    apiUploadEndpoint?: string;
}
export interface StatusOptions {
    apiStatusEndpoint?: string;
}
export interface ApiUploadResponse {
    job: string;
}
export interface ApiStatusParams {
    token: string;
    job: string;
}
export interface ApiStatusResponse {
    status: number;
    message: string;
    hash?: string;
    link?: string;
    qrcode?: string;
    links?: string[];
    qrcodes?: string[];
}
export declare type AnyFunction = (...args: any) => any;
export declare type AnyObject = Record<any, any>;
