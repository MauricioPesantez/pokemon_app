import { getBg } from "../../utils/general";
import { ReactNode, useState } from "react";
import styles from "./Modal.module.css";

interface IModalProps {
  title?: string;
  children?: ReactNode;
  type?: string;
  setIsOpen: () => void;
}

const Modal = ({ setIsOpen, children, title, type }: IModalProps) => {
  const showPokemon: any = getBg(type || "");
  return (
    <>
      <div className={styles.darkBG} onClick={setIsOpen} />
      <div className={styles.centered}>
        <div
          className={styles.modal}
          style={{
            background: `linear-gradient(0deg, ${showPokemon?.colors[1]} 0%, ${showPokemon?.colors[0]} 50%)`,
          }}
        >
          {title && (
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>{title}</h5>
            </div>
          )}
          <button className={styles.closeBtn} onClick={setIsOpen}>
            <span>x</span>
          </button>
          <div className={styles.modalContent}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
