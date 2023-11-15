"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJobStatus = void 0;
const node_fetch_1 = require("node-fetch");
exports.fetchJobStatus = async ({ token, job }, { apiStatusEndpoint }) => {
    const url = `${apiStatusEndpoint}/?token=${token}&job=${job}`;
    const res = await node_fetch_1.default(url);
    return res.json();
};
