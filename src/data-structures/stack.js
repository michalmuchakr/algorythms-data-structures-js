/**
 * Module Stack
 * base on array, elements are added to end of array,
 * and are poped from there
 *
 * @param {initalStackItems} Array - initial items for stack.
 */
let Stack = function () {
    this.items = new Array(0);

    const push = (itemBeToPushed) => {
        this.items.push(itemBeToPushed);
    };

    const isEmpty = () => {
        return this.items.length === 0;
    };

    const pop = () => {
        if (isEmpty()) {
            return null;
        }
        return this.items.pop();
    };

    const showTop = () => {
        return this.items[this.items.length - 1];
    };

    return {
        push,
        pop,
        isEmpty,
        showTop,
    };
};

export default Stack;