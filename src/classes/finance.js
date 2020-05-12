class Finance {
    item = null;
    date = null;
    quantity = null;
    value = null;

    constructor(item, date, quantity, value) {
        this.item = item;
        this.date = date;
        this.quantity = quantity;
        this.value = value;

        Object.freeze(this);
    }
}

module.exports = Finance;
