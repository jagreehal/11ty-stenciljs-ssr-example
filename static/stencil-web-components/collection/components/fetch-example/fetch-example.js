import { Component, Prop, State, h } from "@stencil/core";
const SEARCH = "//api.github.com/search/repositories";
const Result = ({ result }) => {
    return (h("div", { class: "result" },
        h("div", null,
            h("a", { href: result.html_url, target: "_blank" }, result.full_name),
            "\uD83C\uDF1F",
            h("strong", null, result.stargazers_count)),
        h("p", null, result.description)));
};
export class FetchExample {
    constructor() {
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
        return (h("div", null,
            h("div", { class: "list" }, this.results.map(result => (h(Result, { result: result }))))));
    }
    static get is() { return "fetch-example"; }
    static get properties() { return {
        "q": {
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
            "attribute": "q",
            "reflect": false,
            "defaultValue": "\"stencil\""
        }
    }; }
    static get states() { return {
        "results": {}
    }; }
}
