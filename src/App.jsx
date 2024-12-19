import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Users } from "./pages/users"
import { Products } from "./pages/home"

function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Usuarios" element={<Users/>}/>
                    <Route path="/Productos" element={<Products/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
