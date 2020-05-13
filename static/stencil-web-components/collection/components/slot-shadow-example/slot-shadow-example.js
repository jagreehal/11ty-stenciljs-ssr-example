import { Component, h, Host } from "@stencil/core";
export class SlotShadowExample {
    render() {
        return (h(Host, null,
            h("div", { class: "text" }, "Above the slot"),
            h("slot", null),
            h("div", { class: "text" }, "Below the slot")));
    }
    static get is() { return "slot-shadow-example"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["slot-shadow-example.css"]
    }; }
    static get styleUrls() { return {
        "$": ["slot-shadow-example.css"]
    }; }
}
