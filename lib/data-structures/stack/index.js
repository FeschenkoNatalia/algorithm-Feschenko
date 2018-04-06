module.exports = (firstElement, secondElement, findElement) => {
    const stack = [];
    stack.push(firstElement);
    stack.push(secondElement);
    findElement = stack.pop();
    console.log(findElement);
    return findElement;
};
