import { sqrt, round } from "mathjs";

export class Greeter {
    greet() {
        let rounded = sqrt(-4);
        
        console.log('hello world ' + rounded);
    }

    returnSomething(num: number): number {
        return round(num);
    }
}