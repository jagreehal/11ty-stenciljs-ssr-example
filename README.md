# Example of using 11ty and Stencil components with SSR

[![Greenkeeper badge](https://badges.greenkeeper.io/jagreehal/11ty-stenciljs-ssr-example.svg)](https://greenkeeper.io/)

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

## trying it out

Install using yarn and then run

```bash
yarn start
```

more info coming soon!
