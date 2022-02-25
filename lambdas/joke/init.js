const moduleAlias = require("module-alias");

moduleAlias.addAlias("@common", (fromPath, request) => {
  if (process.env.AWS && request.startsWith("@common/")) {
    return "/opt/nodejs/node_modules";
  }

  if (process.env.AWS) {
    return "/opt/nodejs";
  }

  if (request.startsWith("@common/")) {
    return "../../layers/common/nodejs/node_modules";
  }

  return "../../layers/common/nodejs";
});
