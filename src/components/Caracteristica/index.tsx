import Image from "next/image";
import { ReactNode } from "react";
import styles from "./Caracteristica.module.css";

interface ICaracteristicaProps {
  icon?: any;
  attribute: number | string;
  children?: ReactNode;
  title: string;
}

export default function Caracteristica({
  icon,
  attribute,
  title,
}: ICaracteristicaProps) {
  return (
    <div className={styles.main}>
      <Image src={icon} alt={title} width={24} height={24}/>
      <p style={{fontSize: 12, marginBottom: 4}}>{title}</p>
      <span className={styles.attribute}>{attribute}</span>
    </div>
  );
}
