# Exalt Router

A simple client side router for exalt apps.
Full documentation is available [here](https://www.exaltjs.com/docs/#exalt-router)

![Actions](https://github.com/exalt/exalt-router/workflows/build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/exalt/exalt-router/blob/main/LICENSE)
[![Donate](https://img.shields.io/badge/patreon-donate-green.svg)](https://www.patreon.com/outwalkstudios)
[![Follow Us](https://img.shields.io/badge/follow-on%20twitter-4AA1EC.svg)](https://twitter.com/exaltjs)

---

## Installation

You can install @exalt/router using npm:

```
npm install @exalt/router
```

---

## Getting Started

@exalt/router comes with 3 components to handle client side routing.

- exalt-router
- exalt-route
- exalt-link

### Exalt Router

The exalt-router component is used to handle all the routing.
It parses the routes behehind the scenes and will use push state routing by default.
If you want to use hash routing, you can set the hash attribute to enable it.

If you want to programatically change the route, ExaltRouter exposes a static navigate method.

```js
import { ExaltRouter } from "@exalt/router";

ExaltRouter.navigate("/about");
```

### Exalt Route

The exalt-route component is used to define a route and assign a component to it.
It takes two attributes, `url` and `component`.

Parameters are path fragments that are prefixed with a colon and if you want the parameter to be optional you can end it with a question mark. Any route parameters get passed as attributes on the rendered component.

When defining a default route to render if there is no match, just omit the url attribute.

**Example**
```html
<exalt-router>
    <exalt-route url="/" component="home-page" />
    <exalt-route url="/about" component="about-page" />
    <exalt-route url="/about/:topic?" component="about-page" />
    <exalt-route component="not-found" />
</exalt-router>
```

### Exalt Link

The exalt-link component is used to wrap an anchor tag and change its default behavior to use client side routing.
This ensures that in server side rendered environments the routing still works without JavaScript.
The exalt-link component only takes a `url` attribute which is passed as an href attribute to the child anchor tag.

**Example**
```html
<exalt-link url="/about">
    <a>About<a>
</exalt-link>
```

The anchor tag does not need to be a direct child of the exalt-link component, the component will just grab the first anchor tag it finds and enable client side rendering on it.

---

## Reporting Issues

If you are having trouble getting something to work with exalt or run into any problems, you can create a new [issue](https://github.com/exalt/exalt-router/issues).

If this framework does not fit your needs or is missing a feature you would like to see, let us know! We would greatly appreciate your feedback on it.

---

## License

Exalt Router is licensed under the terms of the [**MIT**](https://github.com/exalt/exalt-router/blob/main/LICENSE) license.