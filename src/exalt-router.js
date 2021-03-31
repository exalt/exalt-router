import { Component, html } from "@exalt/core";

export class ExaltRouter extends Component {

    parameters = {};

    render() {
        return html`
            <slot></slot>
        `;
    }

    /* check if there is a route match */
    matchRoute(route, currentUrl) {
        const names = [];
        let index = 0;

        /* create the regex rule to match routes and collect the parameter names */
        const regex = route.replace(/([:*])(\w+)\?/g, (full, colon, name) => {
            names[index++] = name;
            return "?([^/]+)?";
        }).replace(/([:*])(\w+)/g, (full, colon, name) => {
            names[index++] = name;
            return "([^/]+)";
        });


        /* if there is a match, map the parameter names to their value */
        const match = currentUrl.match(new RegExp(`^${regex}/?$`));
        if(match) {
            this.parameters = match.slice(1).reduce((params, value, index) => {
                params[names[index]] = value;
                return params;
            }, {});
        }

        return match;
    }

    /* get the route's parameters as a props string */
    getParameters() {
        const keys = Object.keys(this.parameters);
        let props = "";

        for(let key of keys) {
            props += `${key}="${this.parameters[key]}"`;
        }

        return props;
    }
}

Component.create({ name: "exalt-router" }, ExaltRouter);