import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getUsers = async () => {
    try{
        const res = await axios.get(`${API_URL}/users`)
        return res.data.users
    } catch (error){
        throw new Error("Error al obtener los datos")
    }
}