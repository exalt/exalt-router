import { Component } from "@exalt/core";
import { ExaltRouter } from "./exalt-router";

export class ExaltRoute extends Component {

    render() {
        if (!(this.parentElement instanceof ExaltRouter)) {
            throw new Error("exalt-route must be a direct child of exalt-router");
        }

        return { source: this.root.innerHTML, data: [] };
    }
}

Component.create({ name: "exalt-route", useShadow: false }, ExaltRoute);