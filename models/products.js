const db = require('../util/database')

module.exports = class Product {
    constructor({t}) {
        this.title = t.title;
        this.price = +t.price;
        this.url = t.url;
        this.status = t.status;
        this.id = t.id;
    }
    save() {
        return db.execute('INSERT INTO PRODUCTS (title, price, url, status) VALUES(?, ?, ?, ?)',
            [this.title, this.price, this.url, this.status]);
    }
    static findById({id=0}) {
        return db.execute('SELECT * FROM PRODUCTS WHERE products.id = ?',[id]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM PRODUCTS')
    }
}