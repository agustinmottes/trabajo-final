import React from "react";
import { NavLink , Link} from "react-router-dom";

import CartdWidght from "./CardWidght";


const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-6">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded ">
            <div className="container-fluid">
             <Link className="navbar-brand" to={"/"}><img src="../imagen/logo.webp" alt="" width="100" height="100" /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link " activeclassname="page" to={"/category/Inicio"}>Inicio</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Lentes "}>Lentes</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link"activeclassname="page" to={"/category/Gorras"}>Gorras </NavLink>
                  </li>

                </ul>
              </div>
            </div>
          </nav>


        </div>

        <div className=" col-md-6  d-flex   align-items-center justify-content-end ">

          <CartdWidght />

        </div>


      </div>


    </div>







  )


}



export default NavBar;