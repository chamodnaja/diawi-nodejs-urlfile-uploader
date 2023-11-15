"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOB_STATUS = exports.DEFAULT_MAX_API_STATUS_CALLS = exports.API_STATUS = exports.API_UPLOAD = void 0;
exports.API_UPLOAD = 'https://upload.diawi.com';
exports.API_STATUS = 'https://upload.diawi.com/status';
exports.DEFAULT_MAX_API_STATUS_CALLS = 30;
var JOB_STATUS;
(function (JOB_STATUS) {
    JOB_STATUS[JOB_STATUS["OK"] = 2000] = "OK";
    JOB_STATUS[JOB_STATUS["PROCEEDING"] = 2001] = "PROCEEDING";
    JOB_STATUS[JOB_STATUS["ERROR"] = 4000] = "ERROR";
})(JOB_STATUS = exports.JOB_STATUS || (exports.JOB_STATUS = {}));
