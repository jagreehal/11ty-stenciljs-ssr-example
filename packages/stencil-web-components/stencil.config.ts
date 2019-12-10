import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-web-components",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null
    },
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-json",
      file: "dist/docs-json.json"
    },
    {
      type: "docs-readme"
    },
    {
      type: "dist-hydrate-script"
    },
    {
      type: "docs-vscode",
      file: "dist/docs-vscode.json"
    }
  ]
};
