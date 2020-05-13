import { Component, Prop, h } from "@stencil/core";
export class ScopedExample {
    render() {
        return (h("div", { class: "text" },
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "scoped-example"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["scoped-example.css"]
    }; }
    static get styleUrls() { return {
        "$": ["scoped-example.css"]
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
