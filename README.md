# hyperterm-one-light

> [Atom One Light][one-light] theme for [HyperTerm][hyperterm]

![](screenshot.png)

## Install

Open your HyperTerm preferences and add `hyperterm-one-light` to plugin list:

```js
plugins: [
  'hyperterm-one-light'
],
```

## Configuration

In your `~/.hyperterm.js`, you can configure the visibility of the blue border
that `hyperterm-one-light` displays on active tabs. By default the blue border
for active tabs is visible.

```js
modules.exports = {
  config: {
    // other config...
    hypertermOneLight: {
      hideBlueBorder: true, // default: false
    },
  },
  // ...
};
```

## License

MIT

[one-light]: https://github.com/atom/one-light-syntax
[hyperterm]: https://hyperterm.org
