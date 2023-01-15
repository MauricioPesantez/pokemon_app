import React from "react";
import styles from "./Slider.module.css";

interface ISlider {
  label: string;
  value: any;
  onChange: (target: any) => void;
  name: string;
}

export default function Slider({ label, value, onChange, name }: ISlider) {
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
