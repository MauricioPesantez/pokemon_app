import { IPokemon, pokemonTypes } from "@/types";
import { useState } from "react";
import Select from "../Select";
import Slider from "../Slider";
import styles from "./Pokemon.module.css";

interface IPokemonProps {
  pokemon?: IPokemon;
}
export default function Pokemon({ pokemon }: IPokemonProps) {
  const [attack, setAttack] = useState(pokemon?.attack || 0);
  const [defense, setDefense] = useState(pokemon?.defense || 0);
  const [hp, setHp] = useState(pokemon?.hp || 0);
  const [type, setType] = useState(pokemon?.type || "");

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {pokemon ? "Editar Pokemon" : "Agregar Pokemon"}
      </div>
      <div className={styles.group}>
        <input className={styles.input_} type="text" required />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
        <label className={styles.label_}>Name</label>
      </div>
      <Select
        placeHolder="Seleccionar tipo..."
        options={pokemonTypes.map((pk) => ({
          label: pk.type,
          value: pk.type,
          icon: pk.icon,
        }))}
        value={type}
        onChange={setType}
      />
      <Slider label="Ataque" value={attack} onChange={setAttack} />
      <Slider label="Defensa" value={defense} onChange={setDefense} />
      <Slider label="HP" value={hp} onChange={setHp} />
    </div>
  );
}
