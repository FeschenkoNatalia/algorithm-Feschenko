
module.exports = (firstElement, secondElement, findElement) => {
    const queue = [];
    queue.push(findElement);
    queue.push(secondElement);
    findElement = queue.shift();
    console.log(findElement);
    return findElement;
};

