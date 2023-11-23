const calculateNumber = require("./0-calcul.js");
var assert = require('assert');

describe("Math addition", function () {
  it("Add two int numbers", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("Add 1 int num and 1 float", function () {
	 assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("Add two floats", function () {
	 assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("Add two floats below .5 to nearest 1", function () {
	 assert.notEqual(calculateNumber(1.5, 3.7), 6)
  });
});
