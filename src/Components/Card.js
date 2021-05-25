import React from 'react';

const Card = ({product}) => {
    return(
        <div className="product-card">
            <img src={product.image} alt={product.description}/>
            <h2>{product.title}</h2>
            <h4>{product.description}</h4>
            <h6 className="product-category">{product.category}</h6>
            <button className='btn'>Check me out</button>
        </div>
    );
}

export default Card;
