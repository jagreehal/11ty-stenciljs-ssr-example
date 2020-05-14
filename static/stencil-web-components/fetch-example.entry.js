import { h, r as registerInstance } from './index-864d46e5.js';

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

export { FetchExample as fetch_example };
