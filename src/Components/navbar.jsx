import { ShoppingCart } from "phosphor-react";
import {Link}from 'react-router-dom'
import React from "react";
import './navbar.css'
export const Navbar=()=>{
    return <div className="navbar">
    <div className="links">
        <Link to="/">shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
    </div>
    </div>
};