import React from "react";
import styles from "../styles/Home.module.css"

type CardProps = {
  titulo: string;
  contenido: string;
};

const Card: React.FC<CardProps> = ({ titulo, contenido }) => {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};

export default Card;
