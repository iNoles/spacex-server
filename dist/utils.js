"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body = ({ order }) => {
    const res = {};
    if (order)
        res.order = order;
    return res;
};
exports.default = body;
//# sourceMappingURL=utils.js.map