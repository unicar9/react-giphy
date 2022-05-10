import React, { FC } from "react";
import styles from "./index.module.css";

interface GifCardProps {
  gifUrl: string;
  title: string;
}

export const GifCard: FC<GifCardProps> = ({ gifUrl, title }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.gif} src={gifUrl} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
