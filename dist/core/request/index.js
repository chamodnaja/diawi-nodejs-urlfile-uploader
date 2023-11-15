"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const https = require("https");
exports.request = async (props) => {
    const { formData, ...requestOptions } = props;
    return new Promise((resolve, reject) => {
        const request = https.request(requestOptions, (request) => {
            request.on('data', (data) => {
                resolve(data);
            });
            request.on('error', reject);
        });
        request.on('response', (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`API Response error: Status: ${res.statusCode}; Message: ${res.statusMessage} `));
            }
        });
        formData.pipe(request);
    });
};
