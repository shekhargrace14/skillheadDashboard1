import {  FaChevronCircleLeft, FaChevronCircleRight, FaEnvelope, FaEye, FaIdCardAlt, FaListAlt, FaPencilAlt, FaTh } from 'react-icons/fa';
import logo from '../public/assets/images/logo-brain.png';
import { Link } from 'react-router-dom';
import { FaChartSimple, FaMessage } from 'react-icons/fa6';
import { BiSolidFaceMask } from 'react-icons/bi';

import { IoNotificationsSharp } from 'react-icons/io5';
import { useState } from 'react';

// import { Children } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const menu = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />,
        },
        {
            path: "managerregistration",
            name: "Manager Registration",
            icon: <FaIdCardAlt />,
        },
        {
            path: "editopportunity",
            name: "Edit Opportunity",
            icon: <FaPencilAlt />,
        },
        {
            path: "viewopportunity",
            name: "View Opportunity",
            icon: <FaEye />
            ,
        },
        {
            path: "opportunitystats",
            name: "Opportunity Stats",
            icon: <FaChartSimple />,
        },
        {
            path: "mangerroles",
            name: "Manger Roles",
            icon: <BiSolidFaceMask />,
        },
        {
            path: "manageemails",
            name: "Manage Emails",
            icon: <FaEnvelope />,
        },
        {
            path: "marketingcampaigns",
            name: "Marketing Campaigns",
            icon: <FaListAlt />,
        },
        {
            path: "discussions",
            name: "Discussions",
            icon: <FaMessage />,
        },
        {
            path: "managenotifications",
            name: "Manage Notifications",
            icon: <IoNotificationsSharp />,


        },
    ];

    return (
        <section className="navbar relative bg-white  h-screen  transition ease-in-out rounded-r-2xl w-[80px] transition ease-in-out3. delay-150 ">
            <div className={`absolute bg-white h-screen ${isOpen ? "w-[280px]" : "w-[80px] "}  text-center`}>         
                <div className="row ">
                    <div className="column  flex flex-col justify-center pl-3 ">
                        <img className="w-[50px] pt-3 pl-3 my-2" src={logo} alt="Logo" />
                        <button className=' relative  py-3 pl-4' onClick={toggle}>
                            <span className={`${isOpen ? "absolute" : "static"} top-0 right-[-10px] text-xl z-10`}>
                                {isOpen ? <FaChevronCircleLeft/> : <FaChevronCircleRight/>}
                            </span>
                        </button>
                        <ul className='menu '>
                            {menu.map((item, index) => (
                                <li key={index} className=' py-3 pl-4 hover:bg-[#f6f8fa]  rounded-l-lg cursor-pointer'>
                                    <Link to={item.path} className='flex items-center gap-4  transition ease-in-out3. delay-150'>
                                        <div className='text-lg '>{item.icon}</div>
                                        <div className={` leading-none ${isOpen ? "text-md" : "hidden"}`}>{item.name}</div>
                                        {/* <div>{item.name}</div> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Navbar;
