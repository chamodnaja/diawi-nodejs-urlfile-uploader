"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawUpload = void 0;
const fs = require("fs");
const path = require("path");
const utils_1 = require("../../utils");
const constants_1 = require("../../constants");
const core_1 = require("..");
const os = require('os');
const https = require('https');
// upload file, without checking the status
exports.rawUpload = async (params, options = {}) => {
    const { file, ...restParams } = params;
    const { onUploadProgress = utils_1.noop, apiUploadEndpoint = constants_1.API_UPLOAD, } = options;
    const tempFile = await downloadTempFileFromUrl(file, 'ipa')
    const filePath = path.resolve(tempFile.filePath);
    // check file existence
    if (!fs.existsSync(filePath))
        throw new Error(`file ${filePath} not found`);
    const fileStream = fs.createReadStream(filePath);
    const form = utils_1.createFormData({ file: fileStream, ...restParams });
    // displays file upload progress
    const fileSize = fs.lstatSync(filePath).size;
    let bytesWritten = 0;
    fileStream.on('data', (chunk) => {
        bytesWritten += chunk.length;
        const progressPercent = Number(((bytesWritten / fileSize) * 100).toFixed(2));
        onUploadProgress(progressPercent, { bytesWritten, fileSize });
    });
    const data = await core_1.request({
        method: 'post',
        host: new URL(apiUploadEndpoint).host,
        headers: form.getHeaders(),
        formData: form,
    });
    return JSON.parse(data);
};

const downloadTempFileFromUrl = async (downloadUrl, ext) => {

    return new Promise((resolve, reject) => {
  
      const fileName = `ipaFile.${ext}`
      const filePath = path.resolve(os.tmpdir(), fileName)
  
      const writeStream = fs.createWriteStream(filePath)
  
      https.get(downloadUrl, response => response.pipe(writeStream))
  
      writeStream.on('close', () => resolve({ success: true, fileName, filePath, downloadUrl, writeStream }))
      writeStream.on('error', () => reject({ success: false, fileName, filePath, downloadUrl, writeStream }))
    })
}