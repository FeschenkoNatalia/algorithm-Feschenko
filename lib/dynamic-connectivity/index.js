module.exports = class DynamicConnectivity {
    constructor(elements) {
        this.size = [];
        this.id = [];
        for (let i = 0; i <= elements; i += 1) {
            this.size.push(1);
            this.id.push(i);
        }
    }

    root(i) {
        while (i !== this.id[i]) {
            this.id[i] = this.id[this.id[i]];
            i = this.id[i];
        }
        return i;
    }

    isConnected(p, q) {
        return this.root(p) === this.root(q);
    }

    connect(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        if (i === j) return;
        if (this.size[i] < this.size[j]) {
            this.id[i] = j;
            this.size[j] += this.size[i];
        } else {
            this.id[j] = i;
            this.size[i] += this.size[j];
        }
    }
};
