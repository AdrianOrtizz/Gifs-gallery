import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

export default {
  getRandomGif: async () => {
    const randomGif = await axios(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );

    if (!randomGif.data) {
      throw new Error("Error al buscar el gif");
    }

    return randomGif.data.data;
  },

  searchGifs: async (q: string, offset: number) => {
    const gifs = await axios(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=25&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`
    );

    if (!gifs.data) {
      throw new Error("Error al buscar el gif");
    }

    return gifs.data;
  },

  getTrendingGifs: async (offset: number) => {
    const gifs = await axios(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=${offset}`
    );

    if (!gifs.data) {
      throw new Error("Error al buscar el gif");
    }

    return gifs.data;
  },
};
