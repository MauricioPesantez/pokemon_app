import styles from "./Confirm.module.css";
import Loading from "../../../public/assets/images/loading.gif";
import Image from "next/image";
interface IConfirmProps {
  text: string;
  confirm: () => void;
  cancel: () => void;
  loading: boolean;
}

export default function Confirm({
  text,
  confirm,
  cancel,
  loading,
}: IConfirmProps) {
  return (
    <div style={{ padding: 8, width: 180 }}>
      <div>{text}</div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          className={styles.confirmButton}
          style={{ backgroundColor: "#029939" }}
          onClick={confirm}
        >
          {loading ? (
            <Image src={Loading} alt="Loading..." width={15} />
          ) : (
            <div>Confirmar</div>
          )}
        </button>
        <button
          style={{ backgroundColor: "#ff3e4e" }}
          className={styles.confirmButton}
          onClick={cancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
