import { useState, useEffect, useCallback } from "react";
import { getTrendingGifs, getSearchedGifs } from "../api/getGifs";

export const useFetchGifs = (offset: number, searchTerm: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [trendingGifs, setTrendingGifs] = useState<any[]>([]);
  const [searchedGifs, setSearchedGifs] = useState<any[]>([]);

  const getAllGifs = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      if (searchTerm) {
        const response = await getSearchedGifs(searchTerm, offset);
        setSearchedGifs((prev) => [...prev, ...response]);
      } else {
        const response = await getTrendingGifs(offset);
        setTrendingGifs((prev) => [...prev, ...response]);
      }

      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  }, [offset, searchTerm]);

  useEffect(() => {
    getAllGifs();
  }, [getAllGifs]);

  return {
    isLoading,
    isError,
    trendingGifs,
    searchedGifs,
    setTrendingGifs,
    setSearchedGifs,
  };
};
