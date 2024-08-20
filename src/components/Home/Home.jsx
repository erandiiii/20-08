import React from 'react'
import './Home.scss'
import MeetOurPartners from '../mop/MeetOurPartners'
import NewsLetter from '../newsletter/Newsletter'
import Carousell from '../Carousell'
import Whateweoffer from '../Whateweoffer'

const Home = () => {
  return (
    <>
     {/* <div className="homepage">
      
      <div className="input-title">
       <h1>HIRE A MODEL OR <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BECOME ONE</h1>
       <div className="filter-models">
         <input className='input1' type="text" />
         <input  className='input2' type="text" />
         <button className='filter-button'>Find model</button>
       </div>
       </div> */}
       {/* <div className="inner-img" style={{ content: `url(${firstImage})` }}></div> */}
       {/* <div className="inner-img2" style={{ content: `url(${secondImage})` }}></div> */}
       
     


    


   {/* </div> */}

     <MeetOurPartners/>
     <NewsLetter/>
        <Carousell/>
        <Whateweoffer/>
      
     </>
   
    
  )
}

export default Home