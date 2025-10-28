import { Request, Response } from "express";

import GifsServices from "../services/GIFs.services";

export default {
  getRandomGif: async (req: Request, res: Response) => {
    try {
      const randomGif = await GifsServices.getRandomGif();
      res.status(200).json(randomGif);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  getSearchedGif: async (req: Request, res: Response) => {
    try {
      const { q, offset } = req.query;

      const searchGif = await GifsServices.searchGifs(
        q as string,
        Number(offset)
      );

      res.status(200).json(searchGif);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  getTrendingGifs: async (req: Request, res: Response) => {
    try {
      const { offset } = req.query;
      const trendingGifs = await GifsServices.getTrendingGifs(Number(offset));

      res.status(200).json(trendingGifs);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },
};
