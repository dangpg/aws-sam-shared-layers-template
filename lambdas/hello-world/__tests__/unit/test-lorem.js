const { getLorem } = require("../../getLorem");

describe("getLorem", function () {
  it("should return lorem", () => {
    const result = getLorem();
    expect(result).not.toBe("");
    expect(result.length).toBeGreaterThan(0);
  });
});
