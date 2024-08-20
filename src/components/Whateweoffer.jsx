import React from 'react'
import { whatData } from './CarousellData'
import './Whatweoffer.scss'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Whateweoffer = (props) => {
    return (
        <div className='whatwo-container'>
            <h1>WHAT WE OFFER</h1>
            <div className="sec-container">

                <div className="thir-container">
                    <button className='butoni1'>
                        <FaArrowLeftLong
                            width={20}
                            height={20}
                            size={22}
                            y={200}
                        />
                    </button>
                    <div className="whatweoffer-div">
                        {whatData.map((props) => {
                            return (
                                <div className="whatwo-card">
                                    <div className='cards-icon'>{props.icon1}</div>
                                    <h1>{props.course}</h1>
                                    <p>{props.paragraph}</p>
                                    <div className='cards-link'>
                                        <a href="">{props.button}</a>
                                        <FaArrowRightLong
                                            width={20}
                                            height={20}
                                            size={25}
                                            y={200}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className='butoni1'>
                        <FaArrowRightLong
                            width={20}
                            height={20}
                            size={21}

                        /> </button>
                </div>

            </div>
            <div className="lastdiv">
                <button>See all</button>
            </div>
        </div>
    )
}

export default Whateweoffer