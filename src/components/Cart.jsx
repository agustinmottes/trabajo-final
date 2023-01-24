import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {

  const { cart, cartTotal, removeItem, clear , sumTotal    } = useContext(CartContext);

  if (cartTotal() === 0) {  

    
    return (
      <div className=" container">
        <div className="row  my-5">
          <div className=" col-md-12">
            <div className="alert alert-success  text-center" role="alert">
              No se encontro el Producto !!
            </div>
          </div>
        </div>
      </div>
    )



  }
  return (
    <div className=" container">
      <div className="row  my-5">
        <div className=" col-md-12">

          <table className="table">
            <thead>

              <tr>
                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-dark"> ¡Vaciar Carrito!</Link></th>
              </tr>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th>&nbsp;</th>
              </tr>

            </thead>
            <tbody>

              {cart.map(item => (
                <tr key={item.id}>
                  <td > <img src={item.imagen} alt={item.nombre} width={70} /></td>
                  <td className=" aling-midle">{item.nombre}</td>
                  <td className=" aling-midle">{item.quantity}</td>
                  <td className=" aling-midle">${item.quantity * item.precio}</td>
                  <td className=" aling-midle text-end"><Link onClick={() => { removeItem   (item.id) }}><img src={"/imagen/trash3.svg"} alt={"Eliminar Producto"} width={32} /></Link></td>
                </tr>
              ))

              }
              <tr>

                <td colSpan={3} className="text-end"><b>Total a Pagar</b>  </td>
                <td> <b>${sumTotal()}</b></td>
          <td className=" text-end"> <Link to={"/checkout"}className=" btn btn-warning">  Finalizar Compra</Link></td>

 

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart;