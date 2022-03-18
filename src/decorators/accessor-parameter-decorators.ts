// property decorator
function Log1(target: any, propertyName: string | Symbol) {
    console.log('property decorator')
    console.log(`target: ${target}, property: ${propertyName}`);
}

// Accessor decorator (basically like a method decorator)
function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(`target: ${target}, property: ${propertyName}, descriptor: ${descriptor}`)
}

// Method decorator
function Log3(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(`target: ${target}, property: ${propertyName}, descriptor: ${descriptor}`)
}

// Parameter decorator
function Log4(target: any, name: string | Symbol, positionOfArguement: number) {
    console.log('Parameter decorator');
    console.log(`target: ${target}, name: ${name}, positionOfArguement: ${positionOfArguement}`)
}

class ProductV2 {
    @Log1 // executed when class definition is executed by js, NOT when an instance is created
    public title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log2
    public setPrice(price: number) {
        if (price > 0) this._price = price;
        else throw new Error(`price has to be greater than 0`)
    }

    @Log3
    public setPriceWithTax(@Log4 tax: number) {
        this._price = this._price * (1 + tax);
    }
}