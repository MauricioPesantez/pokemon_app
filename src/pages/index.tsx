import styles from "@/styles/Home.module.css";
import ApiClient from "@/services/ApiClient";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import { IPokemon } from "@/types";
import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import Logo from "../../public/assets/images/pokemon.webp";
import Add from "../../public/assets/images/add.webp";
import PokemonDetail from "@/components/Pokemon/PokemonDetail";
import Pokemon from "@/components/Pokemon";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [action, setAction] = useState<string | undefined>();
  const [pokemon, setPokemon] = useState<IPokemon | undefined>();

  const getPokemons = async () => await ApiClient.getPokemons();

  const { data: pokemonsData } = useQuery(
    ["GET_POKEMONS"],
    () => getPokemons(),
    {
      keepPreviousData: true,
      staleTime: 1000 * 60,
    }
  );

  const handleOpen = (pokemon: IPokemon) => {
    setOpen(true);
    setPokemon(pokemon);
  };

  const handleEditPokemon = () => {
    setAction("edit");
  };

  const handleClose = () => {
    setPokemon(undefined);
    setOpen(false);
    setAction(undefined);
  };

  return (
    <Page title="Home">
      <div className={styles.title}>
        <Image src={Logo} alt="Pokemon" width={320} />
      </div>
      <div className={styles.pokemons}>
        {(pokemonsData?.data as IPokemon[])?.map((pokemon, index) => {
          return <Card key={index} pokemon={pokemon} handleOpen={handleOpen} />;
        })}
      </div>
      <div className={styles.float_button}>
        <button
          className={styles.add}
          onClick={() => {
            setAction("add");
            setOpen(true);
          }}
        >
          <Image src={Add} alt="Add" width={45} />
        </button>
      </div>
      {open && !action && (
        <Modal setIsOpen={handleClose} type={pokemon?.type || ""}>
          <PokemonDetail
            pokemon={pokemon}
            edit={handleEditPokemon}
            close={handleClose}
          />
        </Modal>
      )}
      {open && action === "edit" && pokemon && (
        <Modal setIsOpen={handleClose} type={pokemon?.type || ""}>
          <Pokemon pokemon={pokemon} />
        </Modal>
      )}
      {open && action === "add" && (
        <Modal setIsOpen={handleClose} type={pokemon?.type || ""}>
          <Pokemon pokemon={pokemon} />
        </Modal>
      )}
    </Page>
  );
}
