import React, { useState, useEffect, useContext } from 'react';
import config from "../../Config/Config.json";
import Card from '../Card/Card';
import "./Board.css";
import InfoContext from '../Context';
import High from "../../assets/High.svg";
import Low from "../../assets/Low.svg";
import Medium from "../../assets/Medium.svg";
import veryLow from "../../assets/VeryLow.svg";
import ToDo from "../../assets/circle.svg"
import Backlog from "../../assets/Dotted.svg"
import Progress from "../../assets/PieChart.svg"
import Lower from "../../assets/Lower.svg"
import Done from "../../assets/completed.svg"
import Cancel from "../../assets/cancel.svg"
import Plus from "../../assets/plus.svg"


const Board = () => {
  const [userData, setUserData] = useState([]);
  const { Grouping, Ordering } = useContext(InfoContext);
  const [GroupFilterdData, setGrouptFilteredData] = useState({}); 

  const priorityImages = {
    0: Lower,
    1: veryLow,
    2: Low,
    3: Medium,
    4: High
};
const selectedImage = (priority) => {
  return priorityImages[priority] || High; 
};
const StatusImages = {
  "Todo": ToDo,
  "Backlog": Backlog,
  "In progress": Progress,
  "Done":Done,
  "Cancelled":Cancel
}
const selectedStatusImages = (status)=>{
 return StatusImages[status] || 'Todo';
}

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
  };

  const getFilteredData = () => {
    let groupData = {};

    userData?.tickets?.forEach((ele) => {
      let key = ele[Grouping];
      if (!groupData[key]) {
        groupData[key] = [];
      }
      groupData[key].push(ele);
    });

    Object.keys(config.Valuesarray?.[Grouping]).forEach((key) => {
      if (!groupData[key]) {
        groupData[key] = [];
      }
    });

    setGrouptFilteredData(groupData);
  };

  useEffect(() => {
    getFilteredData(Grouping);
  }, [userData, Grouping]);

  const ProfilePhoto = (userId) => {
    const fullName = config.Valuesarray[Grouping]?.[userId];
    if (!fullName) return '';

    const words = fullName.split(' ');
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join('');
  };
  const getRandomColor = () => {

    return '#' + Math.floor(Math.random() * 16777215).toString(16);

  };


  if (Object.keys(GroupFilterdData).length === 0) {
    return (<><h1>Loading</h1></>);
  } else {
    return (
      <div className='ticketsContainer'>
        {
          Object.keys(GroupFilterdData).length > 0 ? (
            Object.entries(GroupFilterdData).map(([key, value]) => (
              <div key={key}>
                <div className='ticketNavContainer' >
                  <div className='ticketNavRightContainer'>
                    <div>
                      {
                        Grouping === "userId"?
                        <div className='ProfilePhotoStyle' 
                        style={{ backgroundColor: getRandomColor() }}>
                        {ProfilePhoto(key)}
                          <span></span>
                          <span></span>
                        </div>
                         :Grouping === "priority" ?
                         <img src={selectedImage(parseInt(key))} width={"20px"} alt={`Priority_${key}`} />
                        : Grouping === "status" ?<>
                        <img src={selectedStatusImages((key))} width={"20px"} alt={`Status_${key}`} />
                        </>:
                        <>No data available</>
                      }
                    </div>
                    <div>{config.Valuesarray[Grouping]?.[key]}</div>
                    <div>{value.length}</div>
                  </div>
                  <div className='ticketNavLeftContainer'>
                    <div><img src={Plus} width={"20px"} alt="" /></div>
                    <div><img src={Lower} width={"20px"} alt="" /></div>
                  </div>
                </div>
                
                {value.map((card, index) => (
                  <Card
                    key={index}
                    id={card.id}
                    title={card.title}
                    status={card.status}
                    tag={card.tag}
                    priority={card.priority}
                    name={config.Valuesarray["userId"][card.userId]}
                  />
                ))}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )
        }
      </div>
    );
  }
};

export default Board;

