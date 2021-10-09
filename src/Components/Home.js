import React from 'react';
import './Home.css';
import {HomePageProductData} from './HomePageProductData';
import SingleProductCard from './SingleProductCard';
import FourProductCard from './FourProductCard';
import MultipleProductCard from './MultipleProductCard';
export default function Home() {
    return (
        <div className="home">
            {
            HomePageProductData.map((val) => {
                if (val.imagesData.length === 1) {
                    return (
                        <SingleProductCard Heading={
                                val.heading
                            }
                            Images={
                                val.imagesData[0].image
                            }
                            Bottom={
                                val.bottom
                            }/>
                    )
                } else if (val.imagesData.length === 4) {
                    return (
                        <FourProductCard Heading={
                                val.heading
                            }
                            Image1={
                                val.imagesData[0].image
                            }
                            Info1={
                                val.imagesData[0].info
                            }
                            Image2={
                                val.imagesData[1].image
                            }
                            Info2={
                                val.imagesData[1].info
                            }
                            Image3={
                                val.imagesData[2].image
                            }
                            Info3={
                                val.imagesData[2].info
                            }
                            Image4={
                                val.imagesData[3].image
                            }
                            Info4={
                                val.imagesData[3].info
                            }
                            Bottom={
                                val.bottom
                            }/>
                    )
                } else {
                    return (
                        <MultipleProductCard Heading={
                                val.heading
                            }
                            Image1={
                                val.imagesData[0].image
                            }
                            Image2={
                                val.imagesData[1].image
                            }
                            Image3={
                                val.imagesData[2].image
                            }
                            Image4={
                                val.imagesData[3].image
                            }
                            Image5={
                                val.imagesData[4].image
                            }
                            Image6={
                                val.imagesData[5].image
                            }/>
                    )
                }
            })
        } </div>
    )
}
