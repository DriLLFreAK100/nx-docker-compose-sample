const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const { withWatchPoll } = require("./config-utils");

module.exports = (config, context) => {
  nrwlConfig(config); // first call it so that it @nrwl/react plugin adds its configs,
  withWatchPoll(config);

  return config;
};
