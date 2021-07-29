import { Component } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import { ExaltRouter } from "./exalt-router";

@define("exalt-route")
export class ExaltRoute extends Component {

    render() {
        if (!(this.parentElement instanceof ExaltRouter)) {
            throw new Error("exalt-route must be a direct child of exalt-router");
        }

        return { source: this.root.innerHTML, data: [] };
    }
}