require("./init");

const { getPing } = require("./getPing");
const { getLorem } = require("./getLorem");

exports.lambdaHandler = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world",
        ping: getPing(),
        lorem: getLorem(),
      }),
    };

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

if (require.main === module) {
  (async () => {
    var result = await exports.lambdaHandler(process.argv[1]);
    console.log(result);
  })();
}
