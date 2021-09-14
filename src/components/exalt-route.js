import { Component } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define("exalt-route")
export class ExaltRoute extends Component {

    render() {
        return { source: this.root.innerHTML, data: [] };
    }
}