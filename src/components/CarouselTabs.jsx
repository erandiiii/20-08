import React from 'react'
import {Tab,Tabs , TabPanel , TabList} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { CarousellData,CarousellData1,CarousellData2,CarousellData3,CarousellData4,CarousellData5,CarousellData6 } from './CarousellData';
import Carousell from './Carousell';
import './CarouselTabs.scss'


const CarouselTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList className='tablista'>
          <Tab>All</Tab>
          <Tab>Prishtina</Tab>
          <Tab>Peja</Tab>
          <Tab>Ferizaji</Tab>
          <Tab>Mitrovica</Tab>
          <Tab>Gjakova</Tab>
          <Tab>Gjilani</Tab>
          <Tab>Prizreni</Tab>
        </TabList>

        <TabPanel>
          <div className='tab-container'>
            {CarousellData.map(CarousellData => (
              <Carousell images={CarousellData.images} occupation={CarousellData.occupation} name={CarousellData.name} price={CarousellData.price} location={CarousellData.color} views={CarousellData.views} icon={CarousellData.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container'>
          {CarousellData1.map(CarousellData1 => (
              <Carousell images={CarousellData1.images} occupation={CarousellData1.occupation} name={CarousellData1.name} price={CarousellData1.price} location={CarousellData1.color} views={CarousellData1.views} icon={CarousellData1.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container'>
          {CarousellData2.map(CarousellData2 => (
              <Carousell images={CarousellData2.images} occupation={CarousellData2.occupation} name={CarousellData2.name} price={CarousellData2.price} location={CarousellData2.color} views={CarousellData2.views} icon={CarousellData2.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container'>
          {CarousellData3.map(CarousellData3 => (
              <Carousell images={CarousellData3.images} occupation={CarousellData3.occupation} name={CarousellData3.name} price={CarousellData3.price} location={CarousellData3.color} views={CarousellData3.views} icon={CarousellData3.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container '>
          {CarousellData4.map(CarousellData5 => (
              <Carousell images={CarousellData4.images} occupation={CarousellData4.occupation} name={CarousellData4.name} price={CarousellData4.price} location={CarousellData4.color} views={CarousellData4.views} icon={CarousellData4.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container '>
          {CarousellData5.map(CarousellData5 => (
              <Carousell images={CarousellData5.images} occupation={CarousellData5.occupation} name={CarousellData5.name} price={CarousellData5.price} location={CarousellData5.color} views={CarousellData5.views} icon={CarousellData5.icon}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='tab-container '>
          {CarousellData6.map(CarousellData6 => (
              <Carousell images={CarousellData6.images} occupation={CarousellData6.occupation} name={CarousellData6.name} price={CarousellData6.price} location={CarousellData6.color} views={CarousellData6.views} icon={CarousellData6.icon}/>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default CarouselTabs