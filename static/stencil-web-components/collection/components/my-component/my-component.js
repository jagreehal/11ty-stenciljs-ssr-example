import { Component, Prop, h, Event, State } from "@stencil/core";
export class MyComponent {
    constructor() {
        /**
         * The count value
         */
        this.count = 0;
        this.counter = this.count || 0;
        this.date = new Date();
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
        return (h("div", { class: "message" },
            "Hello, World! I'm ",
            this.getText(),
            " - Initial Count=",
            this.count,
            " - Component Count=",
            this.counter,
            h("button", { onClick: () => this.buttonHandler() }, "+"),
            h("hr", null),
            h("div", null,
                "Date - ",
                this.date.toLocaleTimeString()),
            h("div", null,
                h("slot", null))));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
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
                "text": "The first name (doc from the component)"
            },
            "attribute": "first",
            "reflect": false
        },
        "middle": {
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
                "text": "The middle name"
            },
            "attribute": "middle",
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
                "text": "The lastish name"
            },
            "attribute": "last",
            "reflect": false
        },
        "count": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The count value"
            },
            "attribute": "count",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "counter": {},
        "date": {}
    }; }
    static get events() { return [{
            "method": "event",
            "name": "event",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
}
