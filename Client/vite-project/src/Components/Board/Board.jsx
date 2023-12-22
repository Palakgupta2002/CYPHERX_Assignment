import React from 'react';
import { useState, useEffect,useContext } from 'react';
import config from "../../Config/Config.json";
import Card from '../Card/Card';
import "./Board.css";
import InfoContext from '../Context';

const Board = () => {
    const [userData, setUserData] = useState([]);
    const {Grouping,Ordering}=useContext(InfoContext);
  
    useEffect(() => {
        getData();
    }, []);
  

    const getData = async () => {
        const data = await fetch(config.api_url);
        const result = await data.json();
        setUserData(result);
    }
      
    

    return (
        <div>
            <div className="ticketsContainer">
                {
                   userData?.tickets?.map(({ id, title, status, tag, priority, userId }, index) =>
                   <Card
                       key={index}
                       id={id}
                       title={title}
                       status={status}
                       tag={tag}
                       priority={priority}
                       userId={userId}
                       users={userData.users}
                   />
               )
               
                }
            </div>


        </div>
    )
}

export default Board