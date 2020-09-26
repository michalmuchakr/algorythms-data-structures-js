/**
 * Module Queue
 */
const Queue = () => {
    const items = [];

    const isEmpty = () => {
        return !items.length;
    }

    const addToQueue = (toPush) => {
        items.push(toPush);
    }

    const deQueue = () => {
        if (isEmpty()) {
            return null;
        }
        return items.shift();
    }

    const showFront = () => {
        if (isEmpty()) {
            return null;
        }
        return items[0];
    }

    return {
        addToQueue,
        deQueue,
        isEmpty,
        showFront
    }
}
export default Queue;