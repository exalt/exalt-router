import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import { ExaltRouter } from "./exalt-router";

@define({ tag: "exalt-link", shadow: false })
export class ExaltLink extends Component {

    render({ url, ...props }) {
        const slot = this.root.innerHTML;
        this.root.innerHTML = "";

        return html`
            <a href=${(ExaltRouter.hash) ? `#${url}` : url} ...=${props} onclick=${this.navigate}>
                ${slot}
             </a>
        `;
    }

    /* remove the default behavior of the link tag and replace it with client side routing */
    navigate = (e) => {
        e.preventDefault();
        ExaltRouter.navigate(this.props.url);
    }
}