import { Component, html } from "@exalt/core";
import { ExaltRouter } from "./exalt-router";

export class ExaltLink extends Component {

    render({ url, ...props }) {
        const slot = this.root.innerHTML;
        this.root.innerHTML = "";

        const keys = Object.keys(props);
        const attribs = keys.map((key) => `${key}="${(props[key] === true) ? "" : props[key]}"`);

        return html`
            <a href=${(ExaltRouter.hash) ? `/#${url}` : url} ${attribs.join(" ")} onclick=${this.navigate}>
                ${slot}
            </a>
        `;
    }

    /* remove the default behavior of the link tag and replace it with client side routing */
    navigate = (e) => {
        if (!ExaltRouter.hash) {
            e.preventDefault();
            ExaltRouter.navigate(this.props.url);
        }
    }
}

Component.create({ name: "exalt-link", useShadow: false }, ExaltLink);