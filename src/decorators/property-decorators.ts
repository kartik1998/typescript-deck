function Log(target: any, propertyName: string | Symbol) {
    console.log('property decorator')
    console.log(`target: ${target}, property: ${propertyName}`);
}

class Product {
    @Log // executed when class definition is executed by js, NOT when an instance is created
    public title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    public setPrice(price: number) {
        if (price > 0) this._price = price;
        else throw new Error(`price has to be greater than 0`)
    }

    public setPriceWithTax(tax: number) {
        this._price = this._price * (1 + tax);
    }
}