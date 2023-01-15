import { IPokemon } from "@/types";
import { getBg } from "@/utils/general";
import Caracteristica from "../../Caracteristica";
import styles from "./PokemonDetail.module.css";
import Ball from "../../../../public/assets/icons/pokebola.svg";
import Health from "../../../../public/assets/icons/health.svg";
import Protection from "../../../../public/assets/icons/protection.svg";
import { useState } from "react";
import Modal from "@/components/Modal";
import Confirm from "@/components/Confirm";
import ApiClient from "@/services/ApiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IPokemonDetailProps {
  pokemon?: IPokemon;
  edit: () => void;
  close: () => void;
}

function PokemonDetail({ pokemon, edit, close }: IPokemonDetailProps) {
  const showPokemon: any = getBg(pokemon?.type);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const deletePokemon = async () => await ApiClient.deletePokemon(pokemon);

  const mutation = useMutation({
    mutationFn: deletePokemon,
    async onSuccess() {
      close();
      await queryClient.invalidateQueries({ queryKey: ["GET_POKEMONS"] });
    },
    onError(err) {
      alert("Ocurrió un error inesperado, por favor intenta de nuevo.")
    }
  });
  const handleConfirmDelete = async () => {
    mutation.mutate();
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bgCircle}>
          <img
            className={styles.imgBg}
            src={pokemon?.image}
            alt={pokemon?.name}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.body}>
          <span className={styles.chip}>#{pokemon?.id}</span>
          <span className={styles.name}>{pokemon?.name}</span>
          <div className={styles.about}>
            <Caracteristica
              attribute={pokemon?.attack || 0}
              icon={showPokemon.icon}
              title="Ataque"
            />
            <Caracteristica
              attribute={pokemon?.defense || 0}
              icon={Protection}
              title="Defensa"
            />
            <Caracteristica
              attribute={pokemon?.hp || 0}
              icon={Health}
              title="HP"
            />
            <Caracteristica
              attribute={pokemon?.type || 0}
              icon={Ball}
              title="Tipo"
            />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="confirmButton" onClick={edit}>
                Editar
              </button>
              <button
                className="cancelBtn"
                onClick={() => setOpenDelete(true)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      {openDelete && (
        <Modal setIsOpen={handleCloseDelete}>
          <Confirm
            loading={mutation.isLoading}
            text="Estas seguro de eliminar este pokemon?"
            cancel={handleCloseDelete}
            confirm={handleConfirmDelete}
          />
        </Modal>
      )}
    </>
  );
}

export default PokemonDetail;
