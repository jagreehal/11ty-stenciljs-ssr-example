import { r as registerInstance, h, H as Host } from './index-864d46e5.js';

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

export { SlotShadowExample as slot_shadow_example };
