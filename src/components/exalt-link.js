import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import { ExaltRouter } from "./exalt-router";

@define("exalt-link")
export class ExaltLink extends Component {

    render() {
        return html`<slot></slot>`;
    }

    mount() {
        const href = (ExaltRouter.hash) ? `#${this.props.url}` : this.props.url;
        const link = this.querySelector("a");

        link.setAttribute("href", href);
        link.addEventListener("click", (e) => {
            e.preventDefault();
            ExaltRouter.navigate(this.props.url);
        });
    }
}
