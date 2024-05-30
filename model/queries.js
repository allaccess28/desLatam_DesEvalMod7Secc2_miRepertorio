import { pool } from "../config/DB.js";

export const addSongQueries = async({titulo, artista, tono}) => {
    
  try {
     const sql = {
        text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) returning *",
        values: [titulo, artista, tono],
     }
     const response = await pool.query(sql);
     if(response.rowCount > 0){
        return response.rows[0];
     }else{
        return new Error("No se agrego la cancion");
     }
  } catch (error) {
    console.log("Query Error Code: ", error.code, "message: ", error.message);
  }
}

export const getSongsQueries = async() => {
    try {
        const sql = {
            text: "SELECT * FROM canciones",
        }
        const response = await pool.query(sql);
        return response.rows;
    } catch (error) {
        console.log("Query Error Code: ", error.code, "message: ", error.message);
    }
}

export const editSongQueries = async({id, titulo, artista, tono}) => {
    console.log({id, titulo, artista, tono})
    try {
        const sql = {
            text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 returning *",
            values: [titulo, artista, tono, id],
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows[0];
        }else{
            return new Error("No se actualizo la cancion");
        }
    } catch (error) {
        console.log("Query Error Code: ", error.code, "message: ", error.message);
    }
}

export const deleteSongQueries = async({id}) => {
    try {
        const sql = {
            text: "DELETE FROM canciones WHERE id = $1 returning *",
            values: [id],
        }
        const response = await pool.query(sql);
        if(response.rowCount > 0){
            return response.rows[0];
        }else{
            return new Error("No se elimino la cancion");
        }
    } catch (error) {
        console.log("Query Error Code: ", error.code, "message: ", error.message);
    }
}