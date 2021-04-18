import { Component, html } from "@exalt/core";
import { ExaltRouter } from "./exalt-router";

export class ExaltLink extends Component {

    render({ url }) {
        const slot = this.root.innerHTML;
        this.root.innerHTML = "";

        return html`
            <a href=${url} onclick=${this.navigate}>
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

Component.create({ name: "exalt-link", useShadow: false }, ExaltLink);