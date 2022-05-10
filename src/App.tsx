import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { SearchBar } from "./components/SearchBar";
import { GifCard } from "./components/GifCard";
import { Loader } from "./components/Loader";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

import styles from "./App.module.css";

export const App = () => {
  const [searchTerm, setSearhTerm] = useState<string>("");
  const [currentGifs, setCurrentGifs] = useState<any[]>([]);

  const { loaderRef, offset, setOffset } = useInfiniteScroll();
  console.log("offset: ", offset);
  const { isLoading, isError, trendingGifs, searchedGifs, setSearchedGifs } =
    useFetchGifs(offset, searchTerm);

  const handleSearchGifs = (searchTerm: string) => {
    setOffset(0);
    setSearchedGifs([]);
    setSearhTerm(searchTerm);
  };

  useEffect(() => {
    if (searchedGifs.length) {
      setCurrentGifs(searchedGifs);
    } else {
      setCurrentGifs(trendingGifs);
    }
  }, [trendingGifs, searchedGifs]);

  return (
    <div className={styles.wrapper}>
      <Layout>
        {isError && <div>Something went wrong...</div>}
        <h1 className={styles.title}>GIPHY</h1>
        <header className={styles.stickyHeader}>
          <SearchBar onSearch={handleSearchGifs} />
        </header>
        <section style={{ minHeight: "100vh" }}>
          {currentGifs.map(({ id, images, title }, index) => {
            return (
              <GifCard
                key={`${id}-${index}`}
                gifUrl={(images as any).fixed_width.url}
                title={title}
              />
            );
          })}
        </section>
        <div className={styles.loaderWrapper} ref={loaderRef}>
          {isLoading && <Loader />}
        </div>
      </Layout>
    </div>
  );
};
