import React from "react";

//images
import Velo from '../images/velo.jpg';
import Livres from '../images/livres.jpg';
import Ensemble from '../images/ensemble.jpg';

const CentreInteret = ()=>{
    return(
        <div className="m-5 row">
            <section className="interet col-8">
            <h4>Centre d'intéret</h4>
            <p>Pédaler dans les sentiers </p>
            <p>Lecture à suspense </p>
            <p>Organiser de super moments conviviaux, famille, amis</p>
            </section>

            <section className="images col-1">
                <article>
                    <img src={Velo} alt="velo" width="100px" />
                </article>
                <article>
                    <img src={Livres} alt="livres" width="100px" />
                </article>
                <article>
                    <img src={Ensemble} alt="ensemble" width="100px" />
                </article>
            </section>

        </div>
    )
}
export default CentreInteret;