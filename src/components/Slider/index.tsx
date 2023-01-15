import React from "react";
import styles from "./Slider.module.css";

export default function Slider({ label, value, onChange }) {
  return (
    <div className={styles.slider}>
      <label className={styles.label}>{label}</label>
      <input
        type="range"
        className={styles.sliderBar}
        step={1}
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className={styles.value}>{value}</label>
    </div>
  );
}
