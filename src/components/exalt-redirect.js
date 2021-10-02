import { Component } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import { ExaltRouter } from "./exalt-router";

@define("exalt-redirect")
export class ExaltRedirect extends Component {

    render({ url }) {
        if(url.startsWith("/")) ExaltRouter.navigate(url);
        else window.location.href = url;
    }
}