import { r as registerInstance, h } from './index-864d46e5.js';

const SlotExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", null, "Above the slot"), h("slot", null), h("div", null, "Below the slot")));
    }
};

export { SlotExample as slot_example };
