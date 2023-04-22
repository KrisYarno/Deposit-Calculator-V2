"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var Result = function (_a) {
    var nights = _a.nights, nightlyRates = _a.nightlyRates;
    var _b = React.useState(0), taxes = _b[0], setTaxes = _b[1];
    var _c = React.useState(0), depositTotal = _c[0], setDepositTotal = _c[1];
    React.useEffect(function () {
        var taxesResult = nightlyRates.reduce(function (acc, rate) {
            var a = +(Math.round(rate * 0.05 * 1e2) / 1e2);
            var b = +(Math.round(rate * 0.02 * 1e2) / 1e2);
            var c = +(Math.round(rate * 0.06 * 1e2) / 1e2);
            return acc + a + b + c;
        }, 0);
        var depositTotalResult = nightlyRates.reduce(function (acc, rate) { return acc + rate; }, 0) + taxesResult;
        setTaxes(taxesResult);
        setDepositTotal(depositTotalResult);
    }, [nightlyRates]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Results" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Taxes:" }), (0, jsx_runtime_1.jsx)("p", { children: taxes.toFixed(2) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Deposit Total:" }), (0, jsx_runtime_1.jsx)("p", { children: depositTotal.toFixed(2) })] })] }));
};
exports.default = Result;
