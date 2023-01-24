import React from "react";
import{ doc , getDoc ,getFirestore} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";


const Documento = ()=>{
    const [producto, setProducto]= useState({});

    useEffect(()=>{
       const db =getFirestore();
       const item= doc(db,"items","IeH2rDZ5SKpfwgutTpc9");
       getDoc(item).then((data)=> {
           console.log(data);

       }); 
 
    },[]);
     

    return(
        <h1> DOCUMENTO </h1>
    )
}



export default Documento; 