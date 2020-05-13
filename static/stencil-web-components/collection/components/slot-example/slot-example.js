import { Component, Prop, h } from "@stencil/core";
export class SlotExample {
    render() {
        return (h("div", null,
            h("div", null, "Above the slot"),
            h("slot", null),
            h("div", null, "Below the slot")));
    }
    static get is() { return "slot-example"; }
    static get properties() { return {
        "first": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "first",
            "reflect": false
        },
        "last": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "last",
            "reflect": false
        }
    }; }
}
