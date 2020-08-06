const shops = [];
module.exports = class Shop {
    constructor(t) {
        this.title = t.title,
        this.price = t.price,
        this.id = t.id
    }

    save() {
        shops.push(this)
    }

    static fetchAll() {
        return shops
    }
}