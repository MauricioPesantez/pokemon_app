import PokemonDetail from "../components/Pokemon/PokemonDetail";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../components/Card/index";

it("showbe render", () => {
  render(
    <Card
      handleOpen={() => {}}
      pokemon={{
        attack: 99,
        defense: 50,
        hp: 10,
        id: 69,
        image: "https://",
        name: "pikapika",
        type: "Electrico",
      }}
    />
  );
  expect(screen.getByText("pikapika"));
  expect(screen.getByText("#69"));

});

it("should be render and delete pokemon", () => {
  render(
    <PokemonDetail
      close={() => {}}
      edit={() => {}}
      pokemon={{
        attack: 99,
        defense: 50,
        hp: 10,
        id: 69,
        image: "https://",
        name: "pikapika",
        type: "Electrico",
      }}
    />
  );
  expect(screen.getByText("pikapika"));
  expect(screen.getByText("#69"));
  userEvent.click(screen.getByText("Eliminar"));
  expect(screen.getByText("Estas seguro de eliminar este pokemon"));
});
