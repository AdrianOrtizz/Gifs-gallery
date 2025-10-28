import axios from "axios";
import { create } from "zustand";
import { type GiphyResponse } from "../interfaces/interfaces";

interface GIFsState {
  GIFs: GiphyResponse;
  loading: boolean;
  error: string | null;
  offset: number;
  reset: () => void;
  searchGIFs: (q: string, offset: number) => Promise<void>;
  trendingGIFs: (offset: number) => Promise<void>;
  randomGif: () => Promise<void>;
}

const URL = "http://localhost:3000";

export const useGifsStore = create<GIFsState>((set, get) => ({
  GIFs: [],
  loading: false,
  error: null,
  offset: 0,
  reset: () => {
    set({ offset: 0, GIFs: [] });
  },
  searchGIFs: async (q: string, offset: number) => {
    try {
      set({ loading: true });

      const response = await axios(`${URL}/search?q=${q}&offset=${offset}`);

      const newGifs = response.data.data;
      const currentGifs = get().GIFs;

      set({
        GIFs: [...currentGifs, ...newGifs],
        loading: false,
        offset: response.data.pagination.offset + 50,
      });
    } catch (err) {
      set({ error: "Error al buscar", loading: false });
    }
  },
  trendingGIFs: async (offset: number) => {
    try {
      set({ loading: true });

      const response = await axios(`${URL}/trending?offset=${offset}`);

      const newGifs = response.data.data;
      const currentGifs = get().GIFs;

      set({
        GIFs: [...currentGifs, ...newGifs],
        loading: false,
        offset: response.data.pagination.offset + 50,
      });
    } catch (err) {
      set({ error: "Error al buscar", loading: false });
    }
  },
  randomGif: async () => {
    try {
      set({ loading: true, GIFs: [] });
      const response = await axios(`${URL}/random`);

      set({ GIFs: [response.data], loading: false });
    } catch (error) {
      set({ error: "Error al buscar", loading: false });
    }
  },
}));
