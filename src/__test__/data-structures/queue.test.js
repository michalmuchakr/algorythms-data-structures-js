import Queue from "data-structures/queue";

test("check if new Queue is empty.", () => {
    const myQueue = new Queue();
    expect(myQueue.isEmpty()).toBe(true);
});

test("check if new Queue deQueue returns null.", () => {
    const myQueue = new Queue();
    expect(myQueue.deQueue()).toBe(null);
});

test("check if new Queue showFront returns null.", () => {
    const myQueue = new Queue();
    expect(myQueue.showFront()).toBe(null);
});

test("check adding values to Queue change is empty", () => {
    const myQueue = new Queue();
    myQueue.addToQueue(1);
    expect(myQueue.isEmpty()).toBe(false);
});

test("check showFront after adding values to Queue", () => {
    const myQueue = new Queue();
    myQueue.addToQueue(1);
    myQueue.addToQueue(2);
    expect(myQueue.showFront()).toBe(1);
});

test("check showFront after adding values to Queue and dequeue someof them", () => {
    const myQueue = new Queue();
    myQueue.addToQueue(2);
    myQueue.addToQueue(1);
    myQueue.addToQueue(3);
    myQueue.deQueue();
    myQueue.deQueue();
    expect(myQueue.showFront()).toBe(3);
});