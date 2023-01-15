import { IPokemon } from "@/types";

interface IPokemonProps {
  pokemon?: IPokemon;
}
export default function Pokemon({pokemon}: IPokemonProps) {
  return (
    <div>Pokemon</div>
  )
}
