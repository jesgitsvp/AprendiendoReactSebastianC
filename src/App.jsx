import './App.css'
import { useState, useEffect } from 'react'
import { CardProducts } from './components/card-products'

function App() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al Obtener los datos de productos")
                }
                return res.json()
            })
            .then((result) => {
                setData(result.products)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Cargando Informacion</div>

    if (error) return <div>Error : {error}</div>

    return (
        <div className='container'>
            <h1 style={{ display : "flex", alignItems : "center", justifyContent : "center", paddingBottom : "20px"}}>Productos</h1>
            <div className='product-container'>
                {data.map((item) => (
                    <CardProducts
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.images[0]}
                        category={item.category}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default App
