import { Component, Prop, h } from "@stencil/core";
export class ShadowExample {
    render() {
        return (h("div", { class: "text" },
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "shadow-example"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["shadow-example.css"]
    }; }
    static get styleUrls() { return {
        "$": ["shadow-example.css"]
    }; }
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
