'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a4f3233b.js');

const myComponentCss = ".message.sc-my-component{color:var(--my-component-color, blue)}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The count value
         */
        this.count = 0;
        this.counter = this.count || 0;
        this.date = new Date();
        this.event = index.createEvent(this, "event", 7);
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
        return (index.h("div", { class: "message" }, "Hello, World! I'm ", this.getText(), " - Initial Count=", this.count, " - Component Count=", this.counter, index.h("button", { onClick: () => this.buttonHandler() }, "+"), index.h("hr", null), index.h("div", null, "Date - ", this.date.toLocaleTimeString()), index.h("div", null, index.h("slot", null))));
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
