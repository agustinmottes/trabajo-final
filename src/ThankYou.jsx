import React from "react";
import { useParams , Link} from "react-router-dom";

const ThanYou = () => {
    const {id} = useParams();
     
    return (
        <div className=" container">
            <div className="row my-5">
                <div className="col text-center">
                    
                    <div class="alert alert-secondary" role="alert">
                    <h1>Gracias por tu compra</h1>
                    <p> tu orden es <b>{id}</b></p>
                    <Link to={"/checkout"}className=" btn btn-warning">  Finalizar Compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ThanYou;