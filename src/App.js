"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: blue;\n"], ["\n  background-color: blue;\n"])));
function App() {
    var toPath = function () {
        window.location.href = "https://www.dribbl.net";
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Hello, React!"),
        react_1.default.createElement(Button, { onClick: toPath }, "hello")));
}
exports.default = App;
var templateObject_1;
