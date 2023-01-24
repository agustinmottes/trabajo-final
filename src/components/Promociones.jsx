 import React from "react";


 const Promociones = ()=>{
    return(
        <div className=" container-fluid  bg-secondary ">
            <div className=" container  py-5"> 
            <div className=" row ">
                <div className="col md-2">
                     <img src={"/imagen/logo.webp"} alt=""  width="100"/>
                </div>
                  <div className="col md-8   alig-item-center">
                       <h4>Descarga Nuestra App y no te pierdas nuestras novedades </h4>
                  </div>
                  <div className="col md-2 text-end alig-item-center">
                        <a  href="# "  className="btn  btn-light "  target={"_blank"}> Descargar ahora  </a>
                  </div>
            </div>
            </div>
        </div>
    )
 }


 export default Promociones;