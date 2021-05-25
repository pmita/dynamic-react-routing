import React, {useState, useEffect} from 'react';

const ProductCard = ({match}) => {
    useEffect( () => {
        fetchItem();
    })

    const [currentItem, setCurrentItem] = useState({});

    const fetchItem = async () => {
        const itemData = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await itemData.json();
        setCurrentItem(item);
    }
    return(
        <div className="product-item">
            <img src={currentItem.image} alt={currentItem.description} />
            <div className="product-details">
                <h2>{currentItem.title}</h2>
                <h4>{currentItem.category}</h4>
                <h4>{currentItem.description}</h4>
                <button className="btn">Checkout</button>
            </div>
        </div>
    );
}

export default ProductCard;