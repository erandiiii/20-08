import React from 'react'
import './Home.scss'
import MeetOurPartners from '../mop/MeetOurPartners'
import NewsLetter from '../newsletter/NewsLetter'
import Carousell from '../Carousell'
import Whateweoffer from '../Whateweoffer'

const Home = () => {
  return (
    <>
     <MeetOurPartners/>
     <NewsLetter/>
        <Carousell/>
        <Whateweoffer/>
      
     </>
   
    
  )
}

export default Home