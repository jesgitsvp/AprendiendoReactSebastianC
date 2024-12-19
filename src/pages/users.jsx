

import { CardUsers } from '../components/card-users'
import { useUsers } from '../hooks/useUsers'
import './users.css'

export const Users = () => {

        const {data, loading, error } = useUsers()
    
        if (loading) return <div>Cargando Informacion</div>
    
        if (error) return <div>Error : {error}</div>
    
        return (
            <div className='container'>
                <h1 style={{ display : "flex", alignItems : "center", justifyContent : "center", paddingBottom : "20px"}}>Usuarios</h1>
                <div className='user-container'>
                    {data.map((item) => (
                        <CardUsers
                            key={item.id}
                            name={item.firstName}
                            lastname={item.lastName}
                            image={item.image}
                            age={item.age}
                            gender={item.gender}
                            email={item.email}
                            phone={item.phone}

                        />
                    ))}
                </div>
            </div>
        )   
}