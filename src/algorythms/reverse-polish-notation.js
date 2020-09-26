import Stack from "../data-structures/stack";

const reversePolishNotation = (inputString) => {
    const notationStack = new Stack();

    const inputStringArray = inputString.split(" ");
    let result = null;

    for (let insetion of inputStringArray) {
        if (!isNaN(insetion)) {
            notationStack.push(insetion);
            continue;
        }
        let x = notationStack.pop();
        let y = notationStack.pop();

        result = eval(`${y}${insetion}${x}`);
        notationStack.push(result);
    }
    return notationStack.pop();
}

export default reversePolishNotation;