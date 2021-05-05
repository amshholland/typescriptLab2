import { Player, TeamPlayer } from "./players";

describe("Player", () => {
    test("constructor sets name & jersey", () => {
        let player: Player = new Player("Stan", 14);
        expect(player.name).toBe("Stan");
        expect(player.jersey).toBe(14);
    });
    test("describe method", () => {
        let player: Player = new Player("Millie", 12);
        let result = player.describe();
        expect(result).toBe("Millie wears 12");
    })
});

describe("TeamPlayer", () => {
    test("constructor sets name, jersey & team", () => {
        let teamPlayer: TeamPlayer = new TeamPlayer("Joan", 35, "Clams");
        expect(teamPlayer.name).toBe("Joan");
        expect(teamPlayer.jersey).toBe(35);
        expect(teamPlayer.team).toBe("Clams");
    });
    test("describe method", () => {
        let player: TeamPlayer = new TeamPlayer("Jose", 33, "Longhorns");
        let result = player.describe();
        expect(result).toBe("Jose wears 33 and plays for the Longhorns");
    })
});