"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const core_1 = require("..");
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
// upload file, and wait for proceeding
exports.upload = async (props, options = {}) => {
    const { token } = props;
    // default params
    const { maxApiStatusCalls = constants_1.DEFAULT_MAX_API_STATUS_CALLS, onUploadProgress = utils_1.noop, onStatusProgress = utils_1.noop, apiUploadEndpoint = constants_1.API_UPLOAD, apiStatusEndpoint = constants_1.API_STATUS, } = options;
    const { job } = await core_1.rawUpload(props, {
        onUploadProgress,
        apiUploadEndpoint,
    });
    let statusCallsCount = 0;
    // recursive status checks
    const checkStatus = async () => {
        if (statusCallsCount > maxApiStatusCalls)
            throw new Error('max api calls exceeded');
        const jobStatus = await core_1.fetchJobStatus({ token, job }, { apiStatusEndpoint });
        const { status, message } = jobStatus;
        statusCallsCount += 1;
        onStatusProgress(status);
        switch (status) {
            case constants_1.JOB_STATUS.ERROR: {
                throw new Error(message);
            }
            case constants_1.JOB_STATUS.PROCEEDING: {
                await utils_1.sleep(300);
                return checkStatus();
            }
            default: {
                return jobStatus;
            }
        }
    };
    return checkStatus();
};
