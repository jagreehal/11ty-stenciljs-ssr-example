import { r as registerInstance, h, H as Host } from './index-475aad89.js';
var SEARCH = "//api.github.com/search/repositories";
var Result = function (_a) {
    var result = _a.result;
    return (h("div", { class: "result" }, h("div", null, h("a", { href: result.html_url, target: "_blank" }, result.full_name), "\uD83C\uDF1F", h("strong", null, result.stargazers_count)), h("p", null, result.description)));
};
var FetchExample = /** @class */ (function () {
    function FetchExample(hostRef) {
        registerInstance(this, hostRef);
        this.q = "stencil";
        this.results = [];
    }
    FetchExample.prototype.componentDidLoad = function () {
        var _this = this;
        fetch(SEARCH + "?q=" + this.q)
            .then(function (r) { return r.json(); })
            .then(function (json) {
            _this.results = (json && json.items) || [];
        });
    };
    FetchExample.prototype.render = function () {
        return (h("div", null, h("div", { class: "list" }, this.results.map(function (result) { return (h(Result, { result: result })); }))));
    };
    return FetchExample;
}());
var scopedExampleCss = ".text.sc-scoped-example{color:red}";
var ScopedExample = /** @class */ (function () {
    function ScopedExample(hostRef) {
        registerInstance(this, hostRef);
    }
    ScopedExample.prototype.render = function () {
        return (h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    };
    return ScopedExample;
}());
ScopedExample.style = scopedExampleCss;
var shadowExampleCss = ".text{color:orange}";
var ShadowExample = /** @class */ (function () {
    function ShadowExample(hostRef) {
        registerInstance(this, hostRef);
    }
    ShadowExample.prototype.render = function () {
        return (h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    };
    return ShadowExample;
}());
ShadowExample.style = shadowExampleCss;
var SlotExample = /** @class */ (function () {
    function SlotExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SlotExample.prototype.render = function () {
        return (h("div", null, h("div", null, "Above the slot"), h("slot", null), h("div", null, "Below the slot")));
    };
    return SlotExample;
}());
var slotScopedExampleCss = ".text.sc-slot-scoped-example{color:rgb(110, 110, 173)}";
var SlotScopedExample = /** @class */ (function () {
    function SlotScopedExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SlotScopedExample.prototype.render = function () {
        return (h(Host, null, h("div", { class: "text" }, "Above the slot"), h("slot", null), h("div", { class: "text" }, "Below the slot")));
    };
    return SlotScopedExample;
}());
SlotScopedExample.style = slotScopedExampleCss;
var slotShadowExampleCss = ".text{color:green}";
var SlotShadowExample = /** @class */ (function () {
    function SlotShadowExample(hostRef) {
        registerInstance(this, hostRef);
    }
    SlotShadowExample.prototype.render = function () {
        return (h(Host, null, h("div", { class: "text" }, "Above the slot"), h("slot", null), h("div", { class: "text" }, "Below the slot")));
    };
    return SlotShadowExample;
}());
SlotShadowExample.style = slotShadowExampleCss;
export { FetchExample as fetch_example, ScopedExample as scoped_example, ShadowExample as shadow_example, SlotExample as slot_example, SlotScopedExample as slot_scoped_example, SlotShadowExample as slot_shadow_example };
