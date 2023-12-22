import React, { useState, useEffect, useContext } from 'react';
import config from "../../Config/Config.json";
import Card from '../Card/Card';
import "./Board.css";
import InfoContext from '../Context';


const Board = () => {
    const [userData, setUserData] = useState([]);
    const { Grouping, Ordering } = useContext(InfoContext);
    const [GroupFilterdData,setGrouptFilteredData]=useState([])

    useEffect(() => {
        getData();
    }, [Grouping]);

    const getData = async () => {
        try {
            const data = await fetch(config.api_url);
            const result = await data.json();
            setUserData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getFilteredData = () => {
        let groupData = {};
        userData?.tickets?.forEach((ele) => {
            let key = ele[Grouping];
            if (!groupData[key]) {
                groupData[key] = [];
            }
            groupData[key].push(ele);
        });
        setGrouptFilteredData(groupData);
    
    }

    useEffect(() => {
        const filteredData = getFilteredData(Grouping);
        
    }, [userData, Grouping]);
    

    return (
        <div>
                   {
                   Object.values(
                    config.Valuesarray[Grouping]
                    ).map((ele,index)=>
                    <span key={index}>{ele}</span>
                    )
                    }
            {
                Object.keys(GroupFilterdData).length>0 && Object.entries(GroupFilterdData).map(([key,value])=>
                <>

                </>
                
                )
                
            }

            
        </div>
    );
}

export default Board;
