import React from "react";
import { TButton } from "./@types";
import styles from "./Button.module.scss";

export default function Button(props: TButton) {
  const { text, disabled = false, dataTestId, onClick = () => null } = props;
  return (
    <button data-testid={dataTestId} disabled={disabled} className={styles.button} onClick={() => onClick()}>
      {text}
    </button>
  );
}
