import { request } from "./createRequest";

export const getTrendingGifs = async (offset: number) => {
  const res = await request.get("/trending", {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      limit: 15,
      offset,
    },
  });
  return res.data.data;
};

export const getSearchedGifs = async (searchTerm: string, offset: number) => {
  const res = await request.get("/search", {
    params: {
      api_key: process.env.REACT_APP_GIPHY_API_KEY,
      q: searchTerm,
      limit: 15,
      offset,
    },
  });
  return res.data.data;
};
