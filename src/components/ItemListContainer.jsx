import React from "react";
import arrayProductos from "./json/productos.json"
import ItemCount from "./ItemCount";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";
import Loading from "./Loading";


const ItemListContainer = () => {
   const [items, setItems] = useState([]);
   const [loading , setLoading] =useState(true); 
   const {id}= useParams()

   useEffect(() => {
      const promesa = new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve( id ?  arrayProductos.filter(item =>item.categoria  ===id): arrayProductos);
            setLoading(false);
         }, 2000);
        
        

      })
      
      promesa.then((data) => {
         setItems(data);
       
         

      })
   }, [id]);

   return (
      <div className=" container">
        {loading ? <Loading /> : <ItemList items={items} />}
         
         
      </div>
   )

}



export default ItemListContainer; 