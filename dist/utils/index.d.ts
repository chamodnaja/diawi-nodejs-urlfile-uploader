import * as FormData from 'form-data';
export declare const sleep: (ms: number) => Promise<void>;
export declare const createFormData: (data: Record<string, any>) => FormData;
export declare const noop: () => void;
