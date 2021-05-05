import { Greeter } from "./greeter";
import { HtmlGreeter } from "./htmlGreeter";
import { JavaScriptGreeter } from "./jsGreeter";
import { LoudGreeter } from "./loudGreeter";

describe("Greeter", () => {
    test("class defined", () => {
        let greeting: Greeter = new Greeter('');
        expect(greeting).toBeDefined();
    });
    test("greets without name", () => {
        let greeting: Greeter = new Greeter('Hi');
        expect(greeting.greet('')).toBe('Hi, !');
    });
    test("greets with name", () => {
        let greeting: Greeter = new Greeter("Hi");
        expect(greeting.greet('Ernie')).toBe('Hi, Ernie!');
    });
    test("greets with different name", () => {
        let greeting: Greeter = new Greeter("Hi");
        expect(greeting.greet('Rookie')).toBe('Hi, Rookie!');
    });
    test("greets with different greeting", () => {
        let greeting: Greeter = new Greeter("¡Hola!");
        expect(greeting.greet('Rookie')).toBe('¡Hola!, Rookie!');
    });
    test("greets with different name & different greeting", () => {
        let greeting: Greeter = new Greeter("¡Hola!");
        expect(greeting.greet('Posey')).toBe('¡Hola!, Posey!');
    });
});

describe("jsGreeter", () => {
    test("class defined", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter('');
        expect(jsGreeting).toBeDefined();
    });
    test("call without greeting or name", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("");
        expect(jsGreeting.greet('')).toBe("console.log(', !')");
    });
    test("call without name", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hi");
        expect(jsGreeting.greet('')).toBe("console.log('Hi, !')");
    });
    test("call with name", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("");
        expect(jsGreeting.greet('Ernie')).toBe("console.log(', Ernie!')");
    });
    test("call with different name", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hi");
        expect(jsGreeting.greet('Rookie')).toBe("console.log('Hi, Rookie!')");
    });
    test("greets with different greeting", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("¡Hola!");
        expect(jsGreeting.greet('Rookie')).toBe("console.log('¡Hola!, Rookie!')");
    });
    test("greets with different name & different greeting", () => {
        let jsGreeting: JavaScriptGreeter = new JavaScriptGreeter("¡Hola!");
        expect(jsGreeting.greet('Posey')).toBe("console.log('¡Hola!, Posey!')");
    });
});

describe("loudGreeter", () => {
    test("class defined", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter('');
        expect(loudGreeter).toBeDefined();
    });
    test("returning greet with exclamation points", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        expect(loudGreeter.greet('Ernie')).toBe("Hi, Ernie!!");
    });
    test("calling addVolume once", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        expect(loudGreeter.greet('Ernie')).toBe("Hi, Ernie!!!");
    });
    test("calling addVolume twice", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        expect(loudGreeter.greet('Ernie')).toBe("Hi, Ernie!!!!");
    });
});

describe("htmlGreeter", () => {
    test("class defined", () => {
        expect(HtmlGreeter).toBeDefined();
    });
    test("calling without adding tag argument", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hi");
        expect(htmlGreeter.greet('Ernie')).toBe("<h1>Hi, Ernie!</h1>");
    });
    test("calling with different name", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hi", "p");
        expect(htmlGreeter.greet('Posey')).toBe("<p>Hi, Posey!</p>");
    });
    test("calling with different name & different greeting", () => {
        let htmlGreeter: HtmlGreeter = new HtmlGreeter("Hi there", "div");
        expect(htmlGreeter.greet('Rookie')).toBe("<div>Hi there, Rookie!</div>");
    });
});