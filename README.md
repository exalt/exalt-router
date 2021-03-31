# Exalt Router

A simple client side router for exalt apps.

![Actions](https://github.com/exalt/exalt-router/workflows/build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exalt/exalt-router/blob/main/LICENSE)
[![Donate](https://img.shields.io/badge/patreon-donate-green.svg)](https://www.patreon.com/outwalkstudios)
[![Follow Us](https://img.shields.io/badge/follow-on%20twitter-4AA1EC.svg)](https://twitter.com/OutwalkStudios)

---

## Installation

You can install @exalt/router using npm:

```
npm install @exalt/router
```

---

## Getting Started

@exalt/router comes with two components, `exalt-router` and `exalt-route`.
Any exalt-route components must be a direct child of an exalt-router component.

The exalt-route component takes 2 attributes, a `url` and a `component`. The url attribute is the route for the page and can contain parameters.
Parameters are path fragments that are prefixed with a colon and if you want the parameter to be option you can end it with a question mark.
All parameters are mapped to props and passed to the component.

```html
<exalt-router>
    <exalt-route url="/" component="home-page" />
    <exalt-route url="/about" component="about-page" />
    <exalt-route url="/about/:topic?" component="about-page" />
</exalt-router>
```

---

## Reporting Issues

If you are having trouble getting something to work with exalt or run into any problems, you can create a new [issue](https://github.com/exalt/exalt-router/issues).

If this framework does not fit your needs or is missing a feature you would like to see, let us know! We would greatly appreciate your feedback on it.

---

## License

Exalt Router is licensed under the terms of the [**MIT**](https://github.com/exalt/exalt-router/blob/main/LICENSE) license.