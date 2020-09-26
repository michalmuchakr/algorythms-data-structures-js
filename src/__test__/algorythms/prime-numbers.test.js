import isPrimeNuber from "algorythms/prime-numbers";

test("check if 17 is prime", () => {
  expect(isPrimeNuber(0)).toBe(false);
});

test("check if 1 is prime", () => {
  expect(isPrimeNuber(1)).toBe(false);
});

test("check if 2 is prime", () => {
  expect(isPrimeNuber(2)).toBe(true);
});

test("check if 3 is prime", () => {
  expect(isPrimeNuber(3)).toBe(true);
});

test("check if 17 is prime", () => {
  expect(isPrimeNuber(17)).toBe(true);
});

test("check if -8 is prime", () => {
  expect(isPrimeNuber(-8)).toBe(false);
});

test("check if 144 is prime", () => {
  expect(isPrimeNuber(144)).toBe(false);
});
