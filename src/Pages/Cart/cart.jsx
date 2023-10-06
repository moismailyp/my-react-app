import React,{useContext} from "react";

import './cart.css'
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-items";
import {useNavigate} from 'react-router-dom'
export const Cart=()=>{
    const{cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount1=getTotalCartAmount()
    const navigate=useNavigate()
    return (<div className="cart">
        <div>
        <h1>your cart items</h1>
        </div>
        <div className="cartItems">{PRODUCTS.map(product=>{
if(cartItems[product.id]!=0){
return<CartItem data={product}/>;
} 
        })}
        </div>
    {totalAmount1>0?
        <div className="checkout">
       
            <p>total amount: {totalAmount1}</p>
            <button onClick={()=>navigate("/checkout")}>checkout</button> 
            <button onClick={()=>navigate("/")}>continue shopping</button>
        </div>:<h>your cart is empty </h>}
    </div>

    );
}