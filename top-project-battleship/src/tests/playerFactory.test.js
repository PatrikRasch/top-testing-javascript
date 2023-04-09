import { playerFactory } from "../player.js";

const name = "Patrik";
const idUser = "user";
const idComputer = "computer";

it("Creates a player", () => {
  expect(playerFactory(name, idUser)).toEqual({ name: "Patrik", id: "user" });
});

it("Creates a player", () => {
  expect(playerFactory(name, idComputer)).toEqual({ name: "Patrik", id: "computer" });
});
