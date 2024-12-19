import "./card-users.css"

export const CardUsers = ({name, lastname, image, age, email, phone,gender}) => {
    return (
        <div className="card-user" aria-label="card-users">
            <div className="card-image-container">
                <img className="card-user-image" src={image} alt={name}/>
            </div>
            <article className="card-container-article">
                <div className="card-article">
                    <h2 className="card-user-name">{name}  {lastname}</h2>
                    <span className="card-user-badged">{gender}</span>
                </div>
                <div>
                    <p>{age}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </article>
        </div>
    )
}
