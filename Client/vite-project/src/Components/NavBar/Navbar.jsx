import React, { useState, useContext } from 'react'
import { Button, Popover } from 'antd';
import { ControlOutlined, UpOutlined, DownOutlined } from '@ant-design/icons'
import "./Navbar.css"
import Moon from "../../assets/Moon.svg"
import Sun from "../../assets/Sun.svg"
import InfoContext from '../Context';

const Navbar = () => {
    const { setGrouping, setOrdering, Ordering, Grouping } = useContext(InfoContext);

    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const handleGrouping = (event) => {
        setGrouping(event.target.value)
    }
    const handleOrdering = (event) => {
        setOrdering(event.target.value)
    }

    const content = (
        <div className='popUpContainer'>
            <div>
                <div>Grouping</div>
                <div>
                    <select onChange={handleGrouping} value={Grouping} name="" id="">
                        <option value="priority">Priority</option>
                        <option value="userId">Users</option>
                        <option value="status">Status</option>
                    </select>
                </div>
            </div>
            <div>
                <div>Ordering</div>
                <div>
                    <select onChange={handleOrdering} value={Ordering} name="" id="">
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    )
    return (
        <div className='navbarContainer'>
            <div className="filterBtn">
                <Popover
                    content={content}
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <div className='displayContainer'>
                        <span className="settingIcon"><ControlOutlined /></span>
                        <span>Display</span>
                        <span className="upAndDownIcon">
                            {open ? <UpOutlined /> : <DownOutlined />}
                        </span>
                    </div>
                </Popover>


            </div>
            <div className="themeBtn">
                <img src={Moon} width={"20px"} />
            </div>

        </div>
    )
}

export default Navbar