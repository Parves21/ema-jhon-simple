import React from 'react';
import './products.css';

const Cards = (props) => {
    const { id, name, seller, price, ratings, img, quantity } = props.Product;
    return (
        <div className='Cards-container'>
            <img src={img} alt="sorry image not availiable" />
            <div className="card-info-item">
                <h4 className='card-title'>{name}</h4>
                <p className='card-prics'>Price= <strong>${price}</strong></p>
                <p className='card-manufacturer'>Manufacturer: {seller}</p>
                <p className='card-rating'>Rating: {ratings}Star</p>
            </div>
            <button className='button'>Add to Cart</button>
        </div>
    );
};

export default Cards;