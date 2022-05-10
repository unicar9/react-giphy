import axios from "axios";

const createRequest = () => {
  return axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
  });
};

export const request = createRequest();
