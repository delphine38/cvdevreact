import React from "react";

//images
import Imagepc from '../images/pc.png'

const Competences = ()=>{
    return(
        <div className="row m-5">
            <article className="col-lg-9">
            <h4>Compétences</h4>
            <p>html, css, Bootstrap, Javascript, Php <br />
            frameworks front: React.js, Angular<br />
            frameworks back: Symfony, node.js <br />
            Prototype: Figma <br />
            i.D.E : Vs Code <br />
            Base de données: PhpMyAdmin <br />
            Versionning: GitHub <br />
            Travail d'équipes, curiosité, entraide, à l'écoute <br />
            En poste ou en remote <br />
            Linkedin <br />
            Communication avec Discord </p>
            </article>

            <article className="imagepc col-2">
                <img src={Imagepc} alt="image du pc" width="100px" />
            </article>
            
        </div>
    )
}
export default Competences;