const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

describe("Math Computation", () => {
  it("Sum", () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it("Subtract", () => {
	assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("Divide", () => {
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("Divide with zero denominator", () => {
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
