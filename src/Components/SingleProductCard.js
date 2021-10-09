import React from 'react';
import './ProductCard.css';
export default function SingleProductCard({Heading, Images, Bottom}) {
    return (
        <div className="singleProductCard productCard">
            <div className="card__cardInnerTop">
                <h3>{Heading}</h3>
            </div>
            <div className="card__cardInnerMid">
                <img src={Images}
                    alt=""/>
            </div>
            <div className="card__cardInnerBottom">
                <p>{Bottom}</p>
            </div>
        </div>
    )
}
