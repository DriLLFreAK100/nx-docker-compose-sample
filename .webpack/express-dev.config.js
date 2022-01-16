const { withWatchPoll } = require("./config-utils");

module.exports = (config, context) => {
  withWatchPoll(config);

  return config;
};
