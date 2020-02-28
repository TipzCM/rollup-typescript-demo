import { Greeter } from "./greeter";

export class Test {
    greeter: Greeter;

    constructor() {
        this.greeter = new Greeter();

        this.greeter.greet();
    }

    callme() {
        console.log(this.greeter.returnSomething(1.2));
    }
}
