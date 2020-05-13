import { a as patchEsm, b as bootstrapLazy } from './index-475aad89.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["fetch-example_6",[[0,"fetch-example",{"q":[1],"results":[32]}],[2,"scoped-example",{"first":[1],"last":[1]}],[1,"shadow-example",{"first":[1],"last":[1]}],[4,"slot-example",{"first":[1],"last":[1]}],[6,"slot-scoped-example"],[1,"slot-shadow-example"]]],["my-component",[[6,"my-component",{"first":[1],"middle":[1],"last":[1],"count":[2],"counter":[32],"date":[32]}]]]], options);
  });
};

export { defineCustomElements };
