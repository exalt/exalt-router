import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import { ExaltRouter } from "./exalt-router";

@define("exalt-link")
export class ExaltLink extends Component {

    render() {
        return html`<slot></slot>`;
    }

    mount() {
        const { url } = this.props;

        /* dont allow navigating to hash fragments when using hash routing */
        if(url.includes("#") && ExaltRouter.hash) {
            throw new Error("Hash routing does not support hash fragments in urls");
        }

        const href = (ExaltRouter.hash) ? `#${url}` : url;
        const link = this.querySelector("a");

        link.setAttribute("href", href);
        link.addEventListener("click", (e) => {
            e.preventDefault();
            ExaltRouter.navigate(url);
        });
    }
}
