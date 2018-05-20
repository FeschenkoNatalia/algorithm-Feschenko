const values = [];

module.exports = class {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.isRemoved = false;
    }

    add(node) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
            } else {
                this.left.add(node);
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.add(node);
            }
        }
    }

    search(val) {
        if (this.value === val) {
            if (this.isRemoved) {
                return null;
            }
            return this;
        } else if (val < this.value && this.left !== null) {
            return this.left.search(val);
        } else if (val > this.value && this.right !== null) {
            return this.right.search(val);
        }
        return null;
    }
    getValues() {
        if (this.left !== null) {
            this.left.getValues();
        }
        values.push(this.value);
        if (this.right !== null) {
            this.right.getValues();
        }
        return values;
    }

    remove() {
        this.isRemoved = true;
    }
};
