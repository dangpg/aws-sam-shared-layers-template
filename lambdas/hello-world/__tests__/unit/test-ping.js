const { getPing } = require("../../getPing");

describe("getPing", function () {
  it("should return pong", () => {
    const result = getPing();
    expect(result).toBe("pong");
  });
});
