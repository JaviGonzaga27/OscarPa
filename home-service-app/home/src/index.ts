export let useMyPlugin: typeof import('./useMyPlugin').useMyPlugin;

// @ts-ignore process.env.NODE_ENV is defined by metro transform plugins
if (process.env.NODE_ENV !== 'production') {
  useMyPlugin = require('./useMyPlugin').useMyPlugin;
} else {
  useMyPlugin = () => {};
}
