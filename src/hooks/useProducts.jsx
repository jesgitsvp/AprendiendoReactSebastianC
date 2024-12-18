import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../services/products.services"


export const useProducts = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchProducts =  async () => {
            try {
                const result = await getProducts()
                setData(result)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    return {data, loading, error}
}