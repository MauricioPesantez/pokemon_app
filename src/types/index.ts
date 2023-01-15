import { ReactNode } from "react";
import Bug from "../../public/assets/icons/bug.svg";
import Dark from "../../public/assets/icons/dark.svg";
import Dragon from "../../public/assets/icons/dragon.svg";
import Electric from "../../public/assets/icons/electric.svg";
import Fairy from "../../public/assets/icons/fairy.svg";
import Faghting from "../../public/assets/icons/fighting.svg";
import Fire from "../../public/assets/icons/fire.svg";
import Flying from "../../public/assets/icons/flying.svg";
import Ghost from "../../public/assets/icons/ghost.svg";
import Grass from "../../public/assets/icons/grass.svg";
import Ground from "../../public/assets/icons/ground.svg";
import Ice from "../../public/assets/icons/ice.svg";
import Normal from "../../public/assets/icons/normal.svg";
import Poison from "../../public/assets/icons/poison.svg";
import Psychic from "../../public/assets/icons/psychic.svg";
import Rock from "../../public/assets/icons/rock.svg";
import Steel from "../../public/assets/icons/steel.svg";
import Water from "../../public/assets/icons/water.svg";

export interface IPokemon {
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
  idAutor: number;
}

export interface IDropdownOption {
  label: string;
  value: string;
  icon?: any;
}

export const pokemonTypes = [
  { type: "Normal", colors: ["#A8A77A", "#f5ecec"], icon: Normal },
  { type: "Dragón", colors: ["#6F35FC", "#f5ecec"], icon: Dragon },
  { type: "Electrico", colors: ["#F7D02C", "#f5ecec"], icon: Electric },
  { type: "Hada", colors: ["#D685AD", "#f5ecec"], icon: Fairy },
  { type: "Lucha", colors: ["#C22E28", "#f5ecec"], icon: Faghting },
  { type: "Volador", colors: ["#A98FF3", "#f5ecec"], icon: Flying },
  { type: "Fantasma", colors: ["#735797", "#f5ecec"], icon: Ghost },
  { type: "Hierba", colors: ["#7AC74C", "#f5ecec"], icon: Grass },
  { type: "Bicho", colors: ["#A6B91A", "#f5ecec"], icon: Bug },
  { type: "Fuego", colors: ["#EE8130", "#f5ecec"], icon: Fire },
  { type: "Agua", colors: ["#6390F0", "#f5ecec"], icon: Water },
  { type: "Veneno", colors: ["#A33EA1", "#f5ecec"], icon: Poison },
  { type: "Tierra", colors: ["#E2BF65", "#f5ecec"], icon: Ground },
  { type: "Pieda", colors: ["#B6A136", "#f5ecec"], icon: Rock },
  { type: "Psíquico", colors: ["#F95587", "#f5ecec"], icon: Psychic },
  { type: "Hielo", colors: ["#96D9D6", "#f5ecec"], icon: Ice },
  { type: "Acero", colors: ["#B7B7CE", "#f5ecec"], icon: Steel },
  { type: "Obscuro", colors: ["#705746", "#f5ecec"], icon: Dark },
];
