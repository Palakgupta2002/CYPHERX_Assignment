import React from 'react'
import Navbar from '../NavBar/Navbar'
import { useContext, useState } from 'react'
import InfoContext from '../Context'
import Board from '../Board/Board'



const Home = () => {
    const [Grouping, setGrouping] = useState("Priority")
    const [Ordering, setOrdering] = useState("Title")

    return (
        <>
            <InfoContext.Provider value={{ setGrouping, setOrdering, Ordering, Grouping }}>
                <Navbar />
                <Board />
            </InfoContext.Provider>
        </>

    )
}

export default Home