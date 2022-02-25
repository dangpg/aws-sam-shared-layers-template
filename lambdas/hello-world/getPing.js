const { ping } = require("@common");

exports.getPing = () => {
  return ping();
};
