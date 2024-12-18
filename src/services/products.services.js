import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getProducts = async () => {
    try{
        const res = await axios.get(`${API_URL}/products`)
        return res.data.products
    } catch (error){
        throw new Error("Error al obtener los datos")
    }
}