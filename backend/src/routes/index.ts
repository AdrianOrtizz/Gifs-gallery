import { Router } from "express";

import GIFsRouter from "./GIFs.route";

const router = Router();

router.use("/", GIFsRouter);

export default router;
