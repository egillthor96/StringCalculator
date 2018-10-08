const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});


it("should return number when only one number in string", () => {
	expect(add("1")).toBe(1);
});