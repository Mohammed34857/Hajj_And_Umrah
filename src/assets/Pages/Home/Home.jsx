import './Home.css'
import React from 'react'

import { Hotel, SectionMain, UmrahPrograms , HajjPrograms , About} from '../../Sections/index'

const Home = () => {
  return (
    <div >
    <SectionMain/>
    <UmrahPrograms/>
    <HajjPrograms/>
    <Hotel/>
    <About/>
    </div> 
  )
}

export default Home