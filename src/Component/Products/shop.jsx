import React, { useEffect, useState } from 'react';
import './shop.css'
import Cards from './products';

const Products = () => {
    const [Products, setProducts] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className='Products-container'>
            <div className="produts-info">
                {
                    Products.map(product => <Cards
                        key = {product.id}
                        Product = {product}
                    ></Cards>)
                }
            </div>
            
            <div className="shop-info">
                <h2>All Shop information</h2>
            </div>
        </div>
    );
};

export default Products;