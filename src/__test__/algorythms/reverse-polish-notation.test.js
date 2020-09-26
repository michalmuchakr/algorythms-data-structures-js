import reversePolishNotation from "algorythms/reverse-polish-notation";

test("Check add operation 5 6 + 7 +", () => {
    expect(reversePolishNotation("5 6 + 7 +")).toBe(18);
});

test("Check add operation 2 3 + 5 *", () => {
    expect(reversePolishNotation("2 3 + 5 *")).toBe(25);
});

test("Check add operation 2 7 + 3 / 14 3 - 4 * + 2 /", () => {
    expect(reversePolishNotation("2 7 + 3 / 14 3 - 4 * + 2 /")).toBe(23.5);
});