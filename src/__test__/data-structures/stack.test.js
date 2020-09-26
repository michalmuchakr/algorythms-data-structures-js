import Stack from "data-structures/stack";

test("check if it's possible to add number to Stack", () => {
    const myStac = new Stack();
    myStac.push(5);
    expect(myStac.showTop()).toBe(5);
});

test("check what happend if pop from empty Stack", () => {
    const myStac = new Stack();
    expect(myStac.pop()).toBeNull();
});

test("check if stack is empty", () => {
    const myStac = new Stack();
    console.log(myStac);
    expect(myStac.isEmpty()).toBe(true);
});

test("common usage -> push (4,2,3), pop(), pop()", () => {
    const myStac = new Stack();
    myStac.push(4);
    myStac.push(2);
    myStac.push(3);
    myStac.pop();
    myStac.pop();
    expect(myStac.showTop()).toBe(4);
});