import { r as registerInstance, h } from './index-864d46e5.js';

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

export { ScopedExample as scoped_example };
