// name, jersey
export class Player {
    // name: string;
    // jersey: number;
    // constructor(name: string, jersey: number) {
    //     this.name = name;
    //     this.jersey = jersey;
    // }
    // describe(): string {
    //     return `${this.name} wears ${this.jersey}`;
    // }

    // Shortened way of ^^^^^^
    constructor(public name: string, public jersey: number) {
    }
    describe(): string {
        return `${this.name} wears ${this.jersey}`;
    }
}

// + team (string)
export class TeamPlayer extends Player {
    team: string;
    constructor(name: string, jersey: number, team: string) {
        super(name, jersey);
        this.team = team;
    }
    describe(): string {
        return `${super.describe()} and plays for the ${this.team}`;
    }
}