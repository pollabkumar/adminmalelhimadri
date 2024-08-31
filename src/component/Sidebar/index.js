import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
import { SiGitbook } from "react-icons/si";
import { PiUserSquareFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [activetab, setActivtab] = useState("")
    const isOpensubmenu = () => {

    }
    return (
        <>
            <div className='Sidebar'>
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activetab === 0 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <RxDashboard /> </span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button className={`w-100 ${activetab === 1 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                            <span className='icon'> <MdPostAdd /> </span>
                            Add New Destination
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrappere ${activetab === 1 ? 'colapse' :'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to='/'>Add City</Link></li>
                                <li><Link to='/'>Add Places</Link></li>
                                <li><Link to='/'>Add Places</Link></li>
                                <li><Link to='/'>Add Places</Link></li>
                            </ul>
                        </div>

                        <Link to="/">
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activetab === 2 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <SiGitbook /> </span>
                                View Bookings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activetab === 3 ? 'active' :''}`} onClick={()=>isOpensubmenu()}>
                                <span className='icon'> <PiUserSquareFill /> </span>
                                View Drivers
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar