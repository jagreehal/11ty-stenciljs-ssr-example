import { r as registerInstance, h, H as Host } from './index-864d46e5.js';

const slotScopedExampleCss = ".text.sc-slot-scoped-example{color:rgb(110, 110, 173)}";

const SlotScopedExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "text" }, "Above the slot"), h("slot", null), h("div", { class: "text" }, "Below the slot")));
    }
};
SlotScopedExample.style = slotScopedExampleCss;

export { SlotScopedExample as slot_scoped_example };
