import React, {useState, useEffect} from 'react';
//Let's import everything routing related
import {Link} from 'react-router-dom';

const Shop = () => {
    useEffect( () => {
        fetchProducts();
    }, []);

    //Let's set our state
    const [items, setItems] = useState([]);

    const fetchProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=5');
        const products = await data.json();
        setItems(products);
    }

    return(
        <div className="products-container">
            {items.map( item => (
                    <div className="product-card">
                        <img src={item.image} alt={item.description} />
                        <h2>{item.title}</h2>
                        <h4 className="category">{item.category}</h4>
                        <Link to={`/shop/${item.id}`}>
                            <button className="btn">Details</button>
                        </Link>
                    </div>
               
            ))}
        </div>
    );
}

export default Shop;