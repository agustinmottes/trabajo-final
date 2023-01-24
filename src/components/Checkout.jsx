import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";



const Checkout = () => {

    const { cart, sumTotal } = useContext(CartContext);
    const  [nombre , setNombre]= useState("");
    const [telefono , setTelefono]= useState("");
    const [email , setEmail]= useState("");
    const [orderId , setOrderId]=useState("");

    const generarOrden = () => {
        const fecha= new Date();
         const order ={
            buyer:{name:nombre ,telephone:telefono , email:email},
            items:cart.map(item =>({id:item.id,title:item.nombre, price:item.precio})),
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
         };

         const db= getFirestore();
         const ordersColletion =collection(db , "orders");
         addDoc(ordersColletion,order,).then((snapShot)=>{
            setOrderId (snapShot.id); 
         });
    }

    return (
        <div className=" container">
            <div className="row  my-5">
                <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeHolder="Ingresa tu  Nombre" onInput={(e)=>{setNombre(e.target.value)}}/>

                    </div>
                    <div className="mb-3">
                        <label for="telefono" className="form-label">Telefono:</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Ingresa tu  telefono" onInput={(e)=>{setTelefono(e.target.value)}} />

                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Ingresa tu  Email"onInput={(e)=>{setEmail(e.target.value)}} />

                    </div>
                    <button type="submit" class="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                </form>
                </div>
                <div className=" col-md-6">
                    <table className="table">


                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td > <img src={item.imagen} alt={item.nombre} width={70} /></td>
                                    <td className=" aling-midle">{item.nombre}</td>
                                    <td className=" aling-midle">{item.quantity}</td>
                                    <td className=" aling-midle">${item.quantity * item.precio}</td>

                                </tr>
                            ))

                            }
                            <tr>

                                <td colSpan={2} className="text-end"><b>Total a Pagar</b>  </td>
                                <td> <b>${sumTotal()}</b></td>




                            </tr>

                        </tbody>
                    </table>
                </div> 
                 <div className="row">
                    <div className="col -text-center">
                        {orderId ?  <div class="alert alert-secondary" role="alert"> La Orden Generada es:{ setOrderId}
                         </div>: ""}
                    </div>

                 </div>

            </div>
        </div>
    )
}




export default Checkout;