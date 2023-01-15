import { IPokemon } from "@/types";
import { getBg } from "@/utils/general";
import styles from "@/styles/Card.module.css";
import Image from "next/image";

interface ICard {
  pokemon: IPokemon;
  handleOpen: (pokemon: IPokemon) => void
}
export default function Card({ pokemon, handleOpen }: ICard) {
  const showPokemon: any = getBg(pokemon.type);
  return (
    <div
      className={styles.main}
      style={{
        background: `linear-gradient(0deg, ${showPokemon?.colors[1]} 0%, ${showPokemon?.colors[0]} 90%)`,
      }}
      onClick={() => handleOpen(pokemon)}
    >
      <div className={styles.subCard}>
        <div className={styles.header}>
          <p style={{ color: "#7a7a7a", paddingRight: 8, fontSize: 13 }}>HP</p>
          <span className={styles.hp}>{pokemon.hp}</span>
          <Image className={styles.icon} src={showPokemon.icon} alt={pokemon.type} />
        </div>
        <div className={styles.body}
        style={{
          background: `linear-gradient(0deg, ${showPokemon?.colors[1]} 20%, ${showPokemon?.colors[0]} 99%)`,
        }}
        >
          <div className={styles.description}>
            <span>#{pokemon.id}</span>
            <span className={styles.name}>{pokemon.name}</span>
          </div>
          <div>
            <img src={pokemon.image} alt={pokemon.name} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
