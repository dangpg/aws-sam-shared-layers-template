const app = require("../../app");

describe("Handler", function () {
  it("should return successful response", async () => {
    const result = await app.lambdaHandler();

    expect(typeof result).toBe("object");
    expect(result.statusCode).toEqual(200);
    expect(typeof result.body).toBe("string");

    const response = JSON.parse(result.body);
    expect(response.ping).toBe("pong");
  });
});
