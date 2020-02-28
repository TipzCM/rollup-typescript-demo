import { Greeter } from "./greeter";

describe("Tests", () => {
    let greeter: Greeter;

    beforeAll(() => {
        greeter = new Greeter();
    })

    it("test1", () => {
        spyOn(console, 'log');
        greeter.greet();
        expect(console.log).toHaveBeenCalled();
    });

    it("test2", () => {
        let returned = greeter.returnSomething(1.2);
        expect(returned).toBe(1);
    });
});