import { Router } from "express";

import GIFsControllers from "../controllers/GIFs.controllers";

const GIFsRouter = Router();

GIFsRouter.get("/random", GIFsControllers.getRandomGif);
GIFsRouter.get("/search", GIFsControllers.getSearchedGif);
GIFsRouter.get("/trending", GIFsControllers.getTrendingGifs);
GIFsRouter.get("/", GIFsControllers.getRandomGif);

export default GIFsRouter;
