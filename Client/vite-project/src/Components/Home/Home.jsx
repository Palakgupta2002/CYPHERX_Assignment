import React from 'react'
import Navbar from '../NavBar/Navbar'
import { useContext, useState } from 'react'
import InfoContext from '../Context'
import Board from '../Board/Board'



const Home = () => {
    const [Grouping, setGrouping] = useState("priority")
    const [Ordering, setOrdering] = useState("title")
    const [Theme,setTheme]=useState("Light")

    return (
        <>
            <InfoContext.Provider value={{ setGrouping, setOrdering, Ordering, Grouping,Theme,setTheme }}>
                <Navbar />
                <Board />
            </InfoContext.Provider>
        </>

    )
}

export default Home