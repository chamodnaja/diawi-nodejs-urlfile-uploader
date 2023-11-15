import { ApiStatusParams, ApiStatusResponse, StatusOptions } from '../../types';
export declare const fetchJobStatus: ({ token, job }: ApiStatusParams, { apiStatusEndpoint }: StatusOptions) => Promise<ApiStatusResponse>;
