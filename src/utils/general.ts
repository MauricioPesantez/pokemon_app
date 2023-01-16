import { pokemonTypes } from "../types";
import Normal from "../../public/assets/icons/normal.svg";

export const getBg = (type: any) => {
  const pokemonType = pokemonTypes?.find((p) => p.type === type);
  return pokemonType || { colors: ["#777", "#fff"], icon: Normal };
};
