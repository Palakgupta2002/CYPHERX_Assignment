import React from 'react'
import Navbar from '../NavBar/Navbar'
import InfoCard from '../Card/InfoCard'
import { useContext,useState } from 'react'
import InfoContext from '../../Config/Context'


const Home = () => {
    
    return (
        <>
        <InfoContext.Provider>
            <Navbar />
            <InfoCard />
        </InfoContext.Provider>
        </>

    )
}

export default Home