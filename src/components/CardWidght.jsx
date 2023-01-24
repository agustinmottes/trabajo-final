import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartdWidght = () => {

const {cartTotal} =useContext (CartContext);
    return (

    <Link  to={"/cart"}  className="btn btn-warning position-relative ">
                 <img src="/imagen/cart3 (1).svg" alt="carrito"  width="32"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal( )}
                
            </span>
       </Link>
    )
}


export default CartdWidght;    