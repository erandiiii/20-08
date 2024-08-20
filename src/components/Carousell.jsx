import React from 'react'
import { useState } from 'react'
import './Carousel.scss'
import { CarousellData } from './CarousellData';

const Carousell = (props) => {
 

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const goToPrevious = () =>{
    //     setCurrentIndex((prevIndex)=>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    // );

    // const goToNext = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };
    // }
    return (
       
        <div className="carousel">
            {CarousellData.map((props) => {
                return (
                    
                    <div className='card'>

                        <div className='cards-image' style={{ content: `url(${props.images})` }}></div>

                        <div className='cards-info'>
                            <div className="fl-info">
                                <h4>{props.occupation}</h4>
                            </div>
                            <div className="sl-info">
                                <h3>{props.name}</h3>
                                <h4>{props.price}</h4>
                            </div>
                            <div className="tl-info">
                                <h3>{props.location}</h3>
                                <div className='views-div'>
                                    <div>{props.icon}</div>
                                    <h4>{props.views}</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
       
    )
}



export default Carousell