import React from 'react';
import High from "../../assets/High.svg";
import Low from "../../assets/Low.svg";
import Medium from "../../assets/Medium.svg";
import veryLow from "../../assets/VeryLow.svg";
import "./Card.css"

const Card = ({id, title, status, tag, priority, userId,users}) => {
    
const priorityImages = {
    1: veryLow,
    2: Low,
    3: Medium,
    4: High
  };
  const selectedImage = priorityImages[priority] || 'High';
  
  return (
    <div className='card'>
        <div className="idWithUserStatus">
            <span>{id}</span>
            <span>As</span>
        </div>
        <div className="title">
            {title}
      
        </div>
        <div className="priorityWithRequestType">
            <img width={"20px"} src={selectedImage} alt="" />
            <div className='tag'>
                <span className='circle'></span>
                <span>{tag.join(", ")}</span>
            </div>
        </div>
    </div>
  )
}

export default Card