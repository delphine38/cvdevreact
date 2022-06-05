import React from "react";

//import de composant

//import d'images
import Imagedelphine from '../images/delphinemai22.jpg';

const Delphine = () =>{
    return(
        <div>
            <img src={Imagedelphine} alt="essai react node sql" width="100px" height="100px" className="imageDelphine" />
            <h2>Delphine RODRIGUEZ</h2>
        </div>
    )
}
export default Delphine;