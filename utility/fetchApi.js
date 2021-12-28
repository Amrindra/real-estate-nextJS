import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b4fb7cd4f3mshe7bcc9413a348a2p1c3ef8jsn8d63a17b4dc0",
    },
  });
  return data;
};
