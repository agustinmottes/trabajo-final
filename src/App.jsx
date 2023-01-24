import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Promociones from "./components/Promociones";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Erorr404 from "./components/Erro404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThanYou from "./ThankYou";


function App () {
return (
    <CartContextProvider>
       <BrowserRouter>
    <NavBar />
      <Routes>
       

      <Route path={"/"} element={<ItemListContainer />} />
      <Route path={"/category/:id"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"*"} element={<Erorr404/>} />
      <Route path={"/cart/"} element ={<Cart/>}/>
      <Route path={"/checkout/"} element ={<Checkout/>}/>
      <Route path={"/ThakYou.id/"} element ={<ThanYou/>}/>

    </Routes>
 
      
      <Banner />
      <Promociones />
      <Footer />


    </BrowserRouter>
    </CartContextProvider>
   
  )

}
export default App;
