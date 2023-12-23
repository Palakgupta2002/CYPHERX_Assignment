import React, { useContext } from 'react';
import High from "../../assets/High.svg";
import Low from "../../assets/Low.svg";
import Medium from "../../assets/Medium.svg";
import veryLow from "../../assets/VeryLow.svg";
import ToDo from "../../assets/circle.svg"
import Backlog from "../../assets/Dotted.svg"
import Progress from "../../assets/PieChart.svg"
import Lower from "../../assets/Lower.svg"
import "./Card.css";
import InfoContext from '../Context';

const Card = ({ id, title, status, tag, priority, name }) => {
    const { Grouping, Ordering } = useContext(InfoContext)


    const priorityImages = {
        0: Lower,
        1: veryLow,
        2: Low,
        3: Medium,
        4: High
    };
    const selectedImage = priorityImages[priority] || 'High';
    const StatusImages = {
        "Todo": ToDo,
        "Backlog": Backlog,
        "In progress": Progress
    }
    const selectedStatusImages = StatusImages[status] || 'Todo'

    function ProfilePhoto(name) {
        const word = name.split(" ");
        const letters = word.map((word) => word.charAt(0).toUpperCase()).join('');
        return letters;
    }

    const getRandomColor = () => {
        
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
        
      };
    return (
        <div className='card'>
            <div id='cardContentDesign' className='topCardContent'>
                <div>{id}</div>
                <div >
                    {Grouping !== "userId" && 
                    <div className='ProfilePhotoStyle' style={{ backgroundColor: getRandomColor()}}>{ProfilePhoto(name)}
                    <span></span>
                    <span></span>
                    </div>}
                </div>
            </div>
            <div className='mediumCardContent'>
                <div>
                    {Grouping!=="status" && <img width={"20px"} src={selectedStatusImages} alt="" />}
                </div>
                <div>{title}</div>
            </div>
            <div className='lowerCardContent'>
                <div>
                    {Grouping!=="priority" && <img width={"20px"} src={selectedImage} alt="" />}
                </div>
                <div>{tag}</div>
            </div>

        </div>
    )
}

export default Card
