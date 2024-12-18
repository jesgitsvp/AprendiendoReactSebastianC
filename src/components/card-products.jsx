import "./card-products.css"

export const CardProducts = ({title, price, image, category, description, holaaa}) => {
    return (
        <div className="card-product" aria-label="card-products">
            <div className="card-image-container">
                <img className="card-product-image" src={image} alt={title}/>
            </div>
            <article className="card-container-article">
                <div className="card-article">
                    <h2 className="card-product-title">{title}</h2>
                    <span className="card-product-badged">{category}</span>
                </div>
                <div>
                    <p>s/ {price}</p>
                    <p>{holaaa}</p>
                </div>
                <p className="card-product-discription">{description}</p>
            </article>
        </div>
    )
}
