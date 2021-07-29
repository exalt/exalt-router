import { Component } from "@exalt/core";

declare module "@exalt/router" {
    export class ExaltRouter extends Component {

        static navigate(url: string): void;
    }
}

declare module "@exalt/router/exalt-router" {
    export class ExaltRouter extends Component {

        static navigate(url: string): void;
    }
}