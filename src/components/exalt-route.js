import { Component } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "exalt-route", shadow: false })
export class ExaltRoute extends Component {

    render() {
        return { source: this.root.innerHTML, data: [] };
    }
}