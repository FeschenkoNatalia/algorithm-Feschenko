
function LinkedList() {
    this.head = null;
}

LinkedList.push = function f(val) {
    const node = {
        value: val,
        next: null,
    };
    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
};
