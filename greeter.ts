export class Greeter {
    constructor(public greeting: string) {
    }

    greet(name: string): string {
        return `${this.greeting}, ${name}!`
    }
}