import express from "express";
import { addSong, home, getSongs, editSong, deleteSong } from "../controller/controller.js";

const router = express.Router();


router.get("/", home);

router.post("/cancion", addSong);
router.get("/canciones", getSongs);
router.put("/cancion", editSong);
router.delete("/cancion", deleteSong);


export default router;