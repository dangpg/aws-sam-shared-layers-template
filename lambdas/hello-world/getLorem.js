const { loremIpsum } = require("@common/lorem-ipsum");

exports.getLorem = () => {
  return loremIpsum();
};
