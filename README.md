# Example of using 11ty and Stencil components with SSR

This is a early demo of using server rendered Stencil components in 11ty

which is possible by adding a transform in .eleventy.js

```javascript
config.addTransform("ssr", async (content, outputPath) => {
  if (outputPath.endsWith(".html")) {
    try {
      const { html } = await renderToString(content);
      return html;
    } catch (error) {
      return error;
    }
  }
  return content;
});
```

## demo

[See it in action!](https://jagreehal.github.io/11ty-stenciljs-ssr-example/)

## dev

```bash
yarn
yarn start
```

more info coming soon!
