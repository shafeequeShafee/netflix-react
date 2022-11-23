import React from 'react'
import Banner from '../../Banner/Banner'
import RowPoster from '../../RowPoster/RowPoster'
import {originals,action} from '../../../urls/urls'
import NavBar from '../../NavBar/NavBar'

function Home() {
  return (
    <>
       <NavBar/>
       <Banner/>
       <RowPoster title='Netflix Originals'  isSmall={false} url={originals} />
       <RowPoster title='Action' isSmall={true} url={action}/>
    </>
  )
}

export default Home