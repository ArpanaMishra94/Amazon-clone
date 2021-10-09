import React from 'react';
import './MultipleProductCard.css';
import {Grid} from '@material-ui/core';
export default function MultipleProductCard({
    Heading,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6
}) {
    return (
        <div className="multipleProductCard">
            <p>{Heading}</p>
            <Grid container spacing={12} className = "multipleProduct__grid">
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image1}/>
                </Grid>
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image2}/>
                </Grid>
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image3}/>
                </Grid>
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image4}/>
                </Grid>
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image5}/>
                </Grid>
                <Grid item xs = {2} className = "multipleProduct__gridItem">
                    <img src={Image6}/>
                </Grid>
            </Grid>
        </div>
    )
}
