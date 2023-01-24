import React, { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/CartContext";



const ItemDetail = ({ item }) => {
    const{addItem}=useContext(CartContext);
   
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
     setItemStock(itemStock - quantity);
      addItem ( item ,  quantity);
     
    }


    useEffect(() => {
        setItemStock(item.stock);
    },[item] );

    return (
        <div className=" container">
            <div className="row">
                <div className=" col-md-4 offset-md-2">
                    <img src={item.imagen} alt={item.nombre} className=" img-fluid" />

                </div>

                <div className=" col-md-4 text-center mx-5">
                    <h1>{item.nombre}</h1>
                     <h2>{item.cantidad}</h2>
                    <h5><b>${item.precio}</b></h5>
                    <ItemCount stock={itemStock} onAdd={onAdd} />

                </div>
            </div>

        </div>
    )
}





export default ItemDetail;