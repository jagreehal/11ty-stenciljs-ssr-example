import { r as registerInstance, c as createEvent, h } from './index-475aad89.js';
var myComponentCss = ".message.sc-my-component{color:var(--my-component-color, blue)}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The count value
         */
        this.count = 0;
        this.counter = this.count || 0;
        this.date = new Date();
        this.event = createEvent(this, "event", 7);
    }
    MyComponent.prototype.buttonHandler = function () {
        this.counter++;
        this.event.emit(this.counter);
    };
    MyComponent.prototype.tick = function () {
        console.log("update", this.date);
        this.date = new Date();
    };
    MyComponent.prototype.getText = function () {
        return this.first + ", " + this.middle + ", " + this.last;
    };
    MyComponent.prototype.componentWillLoad = function () {
        var _this = this;
        console.log("is about to be rendered");
        this.timerID = setInterval(function () { return _this.tick(); }, 1000);
    };
    MyComponent.prototype.componentDidLoad = function () {
        console.log("has been rendered");
    };
    MyComponent.prototype.componentWillUpdate = function () {
        console.log("will update");
    };
    MyComponent.prototype.componentDidUpdate = function () {
        console.log("did update");
    };
    MyComponent.prototype.componentDidUnload = function () {
        console.log("has been removed from the DOM");
        clearInterval(this.timerID);
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "message" }, "Hello, World! I'm ", this.getText(), " - Initial Count=", this.count, " - Component Count=", this.counter, h("button", { onClick: function () { return _this.buttonHandler(); } }, "+"), h("hr", null), h("div", null, "Date - ", this.date.toLocaleTimeString()), h("div", null, h("slot", null))));
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { MyComponent as my_component };
