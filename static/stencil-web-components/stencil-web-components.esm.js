import { p as patchBrowser, b as bootstrapLazy } from './index-864d46e5.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["fetch-example",[[0,"fetch-example",{"q":[1],"results":[32]}]]],["my-component",[[6,"my-component",{"first":[1],"middle":[1],"last":[1],"count":[2],"counter":[32],"date":[32]}]]],["scoped-example",[[2,"scoped-example",{"first":[1],"last":[1]}]]],["shadow-example",[[1,"shadow-example",{"first":[1],"last":[1]}]]],["slot-example",[[4,"slot-example",{"first":[1],"last":[1]}]]],["slot-scoped-example",[[6,"slot-scoped-example"]]],["slot-shadow-example",[[1,"slot-shadow-example"]]]], options);
});
