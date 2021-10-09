import React from 'react';
import './ProductCard.css';
import {Grid} from '@material-ui/core';
export default function MultipleProductCardData({
    Heading,
    Image1,
    Info1,
    Image2,
    Info2,
    Image3,
    Info3,
    Image4,
    Info4,
    Bottom
}) {
    return (
        <div className="fourProductCardData productCard">
            <div className="card__cardInnerTop">
                <h3>{Heading}</h3>
            </div>
            <div className="fourCard__cardInnerMid">
                <Grid container
                    spacing={12}>
                    <Grid item xs ={6}>
                        <div className="grid__item grid__item1">
                            <img className="grid__image"
                                style={
                                    {cursor: 'pointer'}
                                }
                                src={Image1}
                                alt=""/>
                            <p className="grid_p">
                                {Info1}</p>
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                        <div className="grid__item grid__item2">
                            <img className="grid__image"
                                style={
                                    {cursor: 'pointer'}
                                }
                                src={Image2}
                                alt=""/>
                            <p className="grid_p">
                                {Info2}</p>
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                        <div className="grid__item grid__item1">
                            <img className="grid__image"
                                style={
                                    {cursor: 'pointer'}
                                }
                                src={Image3}
                                alt=""/>
                            <p className="grid_p">
                                {Info3}</p>
                        </div>
                    </Grid>
                    <Grid item xs ={6}>
                        <div className="grid__item grid__item2">
                            <img className="grid__image"
                                style={
                                    {cursor: 'pointer'}
                                }
                                src={Image4}
                                alt=""/>
                            <p className="grid_p">
                                {Info4}</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="card__cardInnerBottom">
                <p>{Bottom}</p>
            </div>
        </div>
    )
}
