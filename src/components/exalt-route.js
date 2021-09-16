import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define("exalt-route")
export class ExaltRoute extends Component {

    render() {
        return html`<slot></slot>`;
    }
}