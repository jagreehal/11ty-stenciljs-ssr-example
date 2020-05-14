import { r as registerInstance, h } from './index-864d46e5.js';

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

export { ShadowExample as shadow_example };
