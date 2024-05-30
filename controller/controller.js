import path from "path";
import { addSongQueries, getSongsQueries, editSongQueries, deleteSongQueries } from "../model/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
}

export const addSong = async(req, res) => {
    const { titulo, artista, tono } = req.body;
    
    const result = await addSongQueries({titulo, artista, tono});
    res.send(result);
}

export const getSongs = async(req, res) => {
    const result = await getSongsQueries();
    res.send(result);
}

export const editSong = async(req, res) => {
    const { id, titulo, artista, tono } = req.body;
    const result = await editSongQueries({id, titulo, artista, tono});
    res.send(result);
}

export const deleteSong = async(req, res) => {
    const { id } = req.query;
    const result = await deleteSongQueries({id});
    res.send(result);
}