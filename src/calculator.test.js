const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});


it("should return number when only one number in string", () => {
	expect(add("1")).toBe(1);
});


it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});


it("should return sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});


it("should return sum of multiple numbers split with newline", () => {
	expect(add("1 \n2,3")).toBe(6);
});

it("should throw an exception if string has negative numbers", () => {
	expect(add("2,-4,3,-5")).toThrow("Negatives not allowed: -4,-5");
});

it("should ignore numbers larger than 1000", () => {
	expect(add("1001,2000,3,2")).toBe(5);
});
