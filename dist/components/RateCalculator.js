"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var NightlyRates_1 = __importDefault(require("./NightlyRates"));
var Result_1 = __importDefault(require("./Result"));
var RateCalculator = function () {
    var _a = (0, react_1.useState)(0), step = _a[0], setStep = _a[1];
    var _b = (0, react_1.useState)(0), nights = _b[0], setNights = _b[1];
    var _c = (0, react_1.useState)([]), nightlyRates = _c[0], setNightlyRates = _c[1];
    var nextStep = function () { return setStep(step + 1); };
    var handleNightsChange = function (e) {
        setNights(parseInt(e.target.value));
    };
    var handleRateChange = function (isRateChanging) {
        if (isRateChanging) {
            setStep(2);
        }
        else {
            setStep(1);
        }
    };
    var handleSingleRateChange = function (e) {
        var rate = parseFloat(e.target.value);
        setNightlyRates(Array(nights).fill(rate));
        nextStep();
    };
    var handleNightlyRatesChange = function (rates) {
        setNightlyRates(rates);
        nextStep();
    };
    if (step === 0) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "How many nights is the reservation for TEST?" }), (0, jsx_runtime_1.jsx)("input", { type: "number", onChange: handleNightsChange }), nights > 0 && (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return nextStep(); } }, { children: "Next" }))] }));
    }
    else if (step === 1) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Does the nightly rate change?" }), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return handleRateChange(false); } }, { children: "Yes" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return handleRateChange(true); } }, { children: "No" }))] }));
    }
    else if (step === 2) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Enter the nightly rate:" }), (0, jsx_runtime_1.jsx)("input", { type: "number", onChange: handleSingleRateChange })] }));
    }
    else if (step === 3) {
        return (0, jsx_runtime_1.jsx)(NightlyRates_1.default, { nights: nights, onRatesSubmit: handleNightlyRatesChange });
    }
    else {
        return (0, jsx_runtime_1.jsx)(Result_1.default, { nights: nights, nightlyRates: nightlyRates });
    }
};
exports.default = RateCalculator;
