import { Component, h, Host } from "@stencil/core";
export class SlotScopedExample {
    render() {
        return (h(Host, null,
            h("div", { class: "text" }, "Above the slot"),
            h("slot", null),
            h("div", { class: "text" }, "Below the slot")));
    }
    static get is() { return "slot-scoped-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["slot-scoped-example.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slot-scoped-example.css"]
    }; }
}
