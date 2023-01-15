import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  test("should render card", () => {
    render(
      <Card
        pokemon={{
          attack: 10,
          defense: 10,
          hp: 10,
          image: "https://img.pokemondb.net/artwork/pikachu.jpg",
          name: "Pikapika",
          type: "Electrico",
          id: 999,
        }}
        handleOpen={() => {}}
      />
    );
    expect(screen.getByText("Pikapika")).toBeDefined();
  });
});
