"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = exports.createFormData = exports.sleep = void 0;
const FormData = require("form-data");
// async await timer
exports.sleep = async (ms) => (new Promise((resolve) => setTimeout(resolve, ms)));
exports.createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return formData;
};
exports.noop = () => { };
