import { r as registerInstance, h, H as Host } from './index-475aad89.js';

const SEARCH = "//api.github.com/search/repositories";
const Result = ({ result }) => {
    return (h("div", { class: "result" }, h("div", null, h("a", { href: result.html_url, target: "_blank" }, result.full_name), "\uD83C\uDF1F", h("strong", null, result.stargazers_count)), h("p", null, result.description)));
};
const FetchExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("div", { class: "list" }, this.results.map(result => (h(Result, { result: result }))))));
    }
};

const scopedExampleCss = ".text.sc-scoped-example{color:red}";

const ScopedExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    }
};
ScopedExample.style = scopedExampleCss;

const shadowExampleCss = ".text{color:orange}";

const ShadowExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "text" }, "Hello, my name is ", this.first, " ", this.last));
    }
};
ShadowExample.style = shadowExampleCss;

const SlotExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", null, "Above the slot"), h("slot", null), h("div", null, "Below the slot")));
    }
};

const slotScopedExampleCss = ".text.sc-slot-scoped-example{color:rgb(110, 110, 173)}";

const SlotScopedExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "text" }, "Above the slot"), h("slot", null), h("div", { class: "text" }, "Below the slot")));
    }
};
SlotScopedExample.style = slotScopedExampleCss;

const slotShadowExampleCss = ".text{color:green}";

const SlotShadowExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "text" }, "Above the slot"), h("slot", null), h("div", { class: "text" }, "Below the slot")));
    }
};
SlotShadowExample.style = slotShadowExampleCss;

export { FetchExample as fetch_example, ScopedExample as scoped_example, ShadowExample as shadow_example, SlotExample as slot_example, SlotScopedExample as slot_scoped_example, SlotShadowExample as slot_shadow_example };
