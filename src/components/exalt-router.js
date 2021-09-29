import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define("exalt-router")
export class ExaltRouter extends Component {

    static parameters = {};
    static routes = [];
    static hash = false;

    render() {
        return html`<slot></slot>`;
    }

    /* setup the router and render the current route */
    mount() {
        ExaltRouter.hash = this.props.hash;
        const url = (ExaltRouter.hash) ? (window.location.hash.slice(1) || "/") : (window.location.pathname || "/");
        window.addEventListener((ExaltRouter.hash) ? "hashchange" : "popstate", this.onURLChange);

        ExaltRouter.routes = Array.from(this.querySelectorAll("exalt-route"));
        ExaltRouter.resolveRoute(url);
    }

    /* remove the routing listener */
    unmount() {
        window.removeEventListener((ExaltRouter.hash) ? "hashchange" : "popstate", this.onURLChange);
    }

    /* resolve the current location when the current url changes */
    onURLChange() {
        const url = (ExaltRouter.hash) ? (window.location.hash.slice(1) || "/") : (window.location.pathname || "/");
        ExaltRouter.resolveRoute(url);
    }

    /* navigate to a new url */
    static navigate(url) {
        if (ExaltRouter.hash) {
            window.location.hash = `#${url}`;
        } else {
            window.history.pushState({}, url, (window.location.origin + url));
            ExaltRouter.resolveRoute(url);
        }
    }

    /* check if a route matches a url */
    static matchRoute(route, url) {
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
        const match = url.match(new RegExp(`^${regex}/?$`));
        if (match) {
            ExaltRouter.parameters = match.slice(1).reduce((params, value, index) => {
                params[names[index]] = value;
                return params;
            }, {});
        }

        return match;
    }

    /* match a url to a route component and render it */
    static resolveRoute(url) {
        const [pageUrl, hashFragment] = url.split("#");


        /* try and match the url with a route */
        let route = ExaltRouter.routes.filter((route) => {
            return route.hasAttribute("url") && ExaltRouter.matchRoute(route.getAttribute("url"), pageUrl);
        })[0];

        /* if there was no match, try to use a 404 route */
        if (!route) route = ExaltRouter.routes.filter((route) => !route.hasAttribute("url"))[0];

        /* render the route */
        if (route) {
            for (let route of ExaltRouter.routes) {
                if (route.firstChild) route.removeChild(route.firstChild);
            }

            const view = document.createElement(route.getAttribute("component"));

            /* assign all the route parameters as component props */
            const props = Object.keys(ExaltRouter.parameters);
            for (let prop of props) {
                view.setAttribute(prop, ExaltRouter.parameters[prop]);
            }

            route.appendChild(view);
            if (hashFragment) view.root.getElementById(hashFragment).scrollIntoView(true);
            else window.scrollTo(0, 0);

        } else {
            console.log("exalt-router: route not found!")
        }
    }
}