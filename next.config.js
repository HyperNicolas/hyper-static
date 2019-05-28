const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  regions: ['bru1']
});
