import React from 'react';
//Let's import our components
import Card from './Card';

const Cards = ({products}) => {
    return(
        <div className="products-container">
            {products.map( product => (
                <Card 
                    product={product} 
                    key={product.id}
                />
            ))}
        </div>
    );
}

export default Cards;