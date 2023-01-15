import { IPokemon, pokemonTypes } from "@/types";
import { useState } from "react";
import Select from "../Select";
import Slider from "../Slider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./Pokemon.module.css";
import ApiClient from "@/services/ApiClient";

interface IPokemonProps {
  pokemon?: IPokemon;
  handleClose: () => void;
}

const pokemonDefault: IPokemon = {
  attack: 0,
  defense: 0,
  hp: 0,
  image: "",
  name: "",
  type: "",
};

export default function Pokemon({ pokemon, handleClose }: IPokemonProps) {
  
  const [pokemonEdit, setPokemonEdit] = useState<IPokemon>(
    pokemon ? pokemon : pokemonDefault
  );
  const queryClient = useQueryClient();
  
  const createNewpokemon = async () => await ApiClient.addPokemon(pokemonEdit);

  const editPokemon = async () => await ApiClient.editPokemon(pokemonEdit);

  const mutation = useMutation({
    mutationFn: pokemon ? editPokemon : createNewpokemon, 
    async onSuccess() {
      handleClose();
      await queryClient.invalidateQueries({ queryKey: ["GET_POKEMONS"] });

    }
  })
  const handleChange = ({ target }) => {
    setPokemonEdit({ ...pokemonEdit, [target.name]: target.value });
  };

  const handleConfirm = async () => {
    const someEmptyValue = Object.values(pokemonEdit).some(
      (s) => s?.length === 0 || s?.length === "" || s === 0
    );
    if (someEmptyValue) {
      alert("Debe compeltar todos los campos!");
    } else {
      await mutation.mutate();
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        {pokemon ? "Editar Pokemon" : "Agregar Pokemon"}
      </div>
      <InputText
        label="Nombre"
        name="name"
        onChangeText={handleChange}
        type="text"
        value={pokemonEdit?.name}
      />
      <InputText
        label="Imagen"
        name="image"
        onChangeText={handleChange}
        type="text"
        value={pokemonEdit?.image}
      />
      <Select
        placeHolder="Seleccionar tipo..."
        options={pokemonTypes.map((pk) => ({
          label: pk.type,
          value: pk.type,
          icon: pk.icon,
        }))}
        value={pokemonEdit?.type}
        onChange={(e) => handleChange({ target: { name: "type", value: e } })}
      />
      <Slider
        name="attack"
        label="Ataque"
        value={pokemonEdit?.attack}
        onChange={handleChange}
      />
      <Slider
        name="defense"
        label="Defensa"
        value={pokemonEdit?.defense}
        onChange={handleChange}
      />
      <Slider
        name="hp"
        label="HP"
        value={pokemonEdit?.hp}
        onChange={handleChange}
      />
      <div className="modalActions">
        <div className="actionsContainer">
          <button className="confirmButton" onClick={handleConfirm}>
            Guardar
          </button>
          <button className="cancelBtn" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

const InputText = ({ label, type, onChangeText, value, name }) => {
  return (
    <div className={styles.group}>
      <input
        name={name}
        className={styles.input_}
        type={type}
        value={value}
        required
        onChange={onChangeText}
      />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label className={styles.label_}>{label}</label>
    </div>
  );
};
