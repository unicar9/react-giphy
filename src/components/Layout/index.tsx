import React, { FC } from "react";
import styles from "./index.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
