'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a4f3233b.js');

const SEARCH = "//api.github.com/search/repositories";
const Result = ({ result }) => {
    return (index.h("div", { class: "result" }, index.h("div", null, index.h("a", { href: result.html_url, target: "_blank" }, result.full_name), "\uD83C\uDF1F", index.h("strong", null, result.stargazers_count)), index.h("p", null, result.description)));
};
const FetchExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.q = "stencil";
        this.results = [];
    }
    componentDidLoad() {
        fetch(`${SEARCH}?q=${this.q}`)
            .then(r => r.json())
            .then(json => {
            this.results = (json && json.items) || [];
        });
    }
    render() {
        return (index.h("div", null, index.h("div", { class: "list" }, this.results.map(result => (index.h(Result, { result: result }))))));
    }
};

const scopedExampleCss = ".text.sc-scoped-example{color:red}";

const ScopedExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    }
};
ScopedExample.style = scopedExampleCss;

const shadowExampleCss = ".text{color:orange}";

const ShadowExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    }
};
ShadowExample.style = shadowExampleCss;

const SlotExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("div", null, "Above the slot"), index.h("slot", null), index.h("div", null, "Below the slot")));
    }
};

const slotScopedExampleCss = ".text.sc-slot-scoped-example{color:rgb(110, 110, 173)}";

const SlotScopedExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "text" }, "Above the slot"), index.h("slot", null), index.h("div", { class: "text" }, "Below the slot")));
    }
};
SlotScopedExample.style = slotScopedExampleCss;

const slotShadowExampleCss = ".text{color:green}";

const SlotShadowExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "text" }, "Above the slot"), index.h("slot", null), index.h("div", { class: "text" }, "Below the slot")));
    }
};
SlotShadowExample.style = slotShadowExampleCss;

exports.fetch_example = FetchExample;
exports.scoped_example = ScopedExample;
exports.shadow_example = ShadowExample;
exports.slot_example = SlotExample;
exports.slot_scoped_example = SlotScopedExample;
exports.slot_shadow_example = SlotShadowExample;
