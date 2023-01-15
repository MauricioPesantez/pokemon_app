import React from "react";
import styles from "./Slider.module.css";

export default function Slider({ label, value, onChange, name }) {
  return (
    <div className={styles.slider}>
      <label className={styles.label}>{label}</label>
      <input
        name={name}
        type="range"
        className={styles.sliderBar}
        step={1}
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange({target: {name, value: parseInt(e.target.value)}})}
      />
      <label className={styles.value}>{value}</label>
    </div>
  );
}
