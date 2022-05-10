import React, { FC, useState } from "react";
import styles from "./index.module.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.btn} onClick={() => onSearch(searchTerm)}>
        Search
      </button>
    </div>
  );
};
