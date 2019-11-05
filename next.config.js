const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const path = require('path');

// const env = process.env.NODE_ENV || 'development';
// const stripeKey = process.env.STRIPE_KEY || 'STRIPE_KEY_HERE';

module.exports = withCSS(withSass({
//   publicRuntimeConfig: {
//     NODE_ENV: env,
//     STRIPE_KEY: stripeKey,
//   },
  webpack: (config) => {
    const alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'components'),
      dredux: path.resolve(__dirname, 'redux'),
      utils: path.resolve(__dirname, 'utils'),
      lib: path.resolve(__dirname, 'lib'),
      constants: path.resolve(__dirname, 'constants'),
      styles: path.resolve(__dirname, 'styles'),
    };

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...alias,
        },
      },
    };
  },
}));
