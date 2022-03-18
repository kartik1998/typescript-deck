function Logger(constructor: Function) { // constructor function of class
    console.log("Logger called")
    console.log(constructor);
}

function LoggerV2(logString: string) {
    return function (constructor: Function) {
        console.log(`loggerV2 called with logString: ${logString}`)
    }
}

@Logger
@LoggerV2('Person') // this is an example of decorator factory
class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log(`person's name is ${name}`);
    }
}
/**
 * decorators execute when your class is defined, not when your class is instantiated
 */

