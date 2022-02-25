require("./init");

const { ping } = require("@common");
const oneLinerJoke = require("one-liner-joke");

exports.lambdaHandler = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "joke",
        ping: ping(),
        joke: oneLinerJoke.getRandomJoke(),
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
