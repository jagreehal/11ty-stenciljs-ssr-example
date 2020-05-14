import { r as registerInstance, c as createEvent, h } from './index-864d46e5.js';

const myComponentCss = ".message.sc-my-component{color:var(--my-component-color, blue)}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The count value
         */
        this.count = 0;
        this.counter = this.count || 0;
        this.date = new Date();
        this.event = createEvent(this, "event", 7);
    }
    buttonHandler() {
        this.counter++;
        this.event.emit(this.counter);
    }
    tick() {
        console.log("update", this.date);
        this.date = new Date();
    }
    getText() {
        return `${this.first}, ${this.middle}, ${this.last}`;
    }
    componentWillLoad() {
        console.log("is about to be rendered");
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentDidLoad() {
        console.log("has been rendered");
    }
    componentWillUpdate() {
        console.log("will update");
    }
    componentDidUpdate() {
        console.log("did update");
    }
    componentDidUnload() {
        console.log("has been removed from the DOM");
        clearInterval(this.timerID);
    }
    render() {
        return (h("div", { class: "message" }, "Hello, World! I'm ", this.getText(), " - Initial Count=", this.count, " - Component Count=", this.counter, h("button", { onClick: () => this.buttonHandler() }, "+"), h("hr", null), h("div", null, "Date - ", this.date.toLocaleTimeString()), h("div", null, h("slot", null))));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
