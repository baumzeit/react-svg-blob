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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgBlob = void 0;
var react_1 = __importStar(require("react"));
var blobshape_1 = __importDefault(require("blobshape"));
exports.SvgBlob = (0, react_1.forwardRef)(function SvgBlob(props, ref) {
    var _a, _b, _c, _d;
    var variant = props.variant, _e = props.isOutline, isOutline = _e === void 0 ? false : _e, _f = props.color, color = _f === void 0 ? 'currentColor' : _f, shapeProps = props.shapeProps, restProps = __rest(props, ["variant", "isOutline", "color", "shapeProps"]);
    var size = (_a = shapeProps === null || shapeProps === void 0 ? void 0 : shapeProps.size) !== null && _a !== void 0 ? _a : 200;
    var growth = (_b = shapeProps === null || shapeProps === void 0 ? void 0 : shapeProps.growth) !== null && _b !== void 0 ? _b : 6;
    var edges = (_c = shapeProps === null || shapeProps === void 0 ? void 0 : shapeProps.edges) !== null && _c !== void 0 ? _c : 6;
    var seed = (_d = shapeProps === null || shapeProps === void 0 ? void 0 : shapeProps.seed) !== null && _d !== void 0 ? _d : 6;
    var svgPath = (0, react_1.useMemo)(function () {
        return (0, blobshape_1.default)({
            size: size,
            growth: growth,
            edges: edges,
            seed: seed,
        });
    }, [size, growth, edges, seed]).path;
    var pathProps = {
        fill: color,
    };
    if (variant === 'gradient') {
        pathProps.fill = "url(#".concat(props.gradientId, ")");
    }
    if (isOutline) {
        pathProps.strokeWidth = '7px';
        pathProps.fill = 'none';
        pathProps.stroke = color;
    }
    if (variant === 'gradient' && isOutline) {
        pathProps.stroke = "url(#".concat(props.gradientId, ")");
    }
    var _g = restProps, colors = _g.colors, pattern = _g.pattern, image = _g.image, svgProps = __rest(_g, ["colors", "pattern", "image"]);
    return (react_1.default.createElement("svg", __assign({ ref: ref }, svgProps, { viewBox: "0 0 ".concat(size, " ").concat(size), xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }),
        props.variant === 'solid' && react_1.default.createElement("path", __assign({ d: svgPath }, pathProps)),
        props.variant === 'gradient' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("defs", null,
                react_1.default.createElement("linearGradient", { id: props.gradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                    react_1.default.createElement("stop", { offset: "0%", style: { stopColor: props.colors[0] } }),
                    react_1.default.createElement("stop", { offset: "100%", style: { stopColor: props.colors[1] } }))),
            react_1.default.createElement("path", __assign({ d: svgPath }, pathProps)))),
        props.variant === 'pattern' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("defs", null,
                react_1.default.createElement("pattern", { id: "pattern", x: "0", y: "0", width: props.pattern.width, height: props.pattern.height, patternUnits: "userSpaceOnUse", fill: color },
                    react_1.default.createElement("path", { d: props.pattern.path }))),
            react_1.default.createElement("path", __assign({ d: svgPath }, pathProps, { fill: "url(#pattern)" })))),
        props.variant === 'image' && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "shape" },
                    react_1.default.createElement("path", __assign({ d: svgPath }, pathProps)))),
            react_1.default.createElement("image", { x: "0", y: "0", width: "100%", height: "100%", clipPath: "url(#shape)", xlinkHref: props.image, preserveAspectRatio: "none" })))));
});
