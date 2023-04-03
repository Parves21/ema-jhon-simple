import React from 'react';
import logo from '../../images/Logo.svg';
import '../Header/Header.css'

const HeaderSection = () => {
    return (
        <div>
            <div className="navber" fixed="top">
                <img className='image-logo' src={logo} alt="sorry not availiable"/>
                <div className="li-list">
                    <a className='list-item' href="#">Order</a>
                    <a className='list-item' href="#">Order Review</a>
                    <a className='list-item' href="#">Manage Inventory</a>
                    <a className='list-item' href="#">Login</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;