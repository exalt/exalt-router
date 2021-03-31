import { Component, html } from "@exalt/core";
import { ExaltRouter } from "./exalt-router";

export class ExaltRoute extends Component {

    render({ url, component }) {
        const router = this.parentElement;

        /* if the parentElement is not an instance of ExaltRouter, throw an error */
        if (!(router instanceof ExaltRouter)) {
            console.error("exalt-route must be a direct child of exalt-router");
            return;
        }

        /* if there is a match render the component, otherwise do nothing */
        const match = router.matchRoute(url, (window.location.pathname || "/"));
        
        if (match) return html`<${component} ${router.getParameters()} />`;
        else return;
    }
}

Component.create({ name: "exalt-route", useShadow: false }, ExaltRoute);