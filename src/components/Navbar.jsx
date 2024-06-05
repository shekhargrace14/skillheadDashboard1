import { FaBars, FaClosedCaptioning, FaCross, FaEnvelope, FaEye, FaIdCardAlt, FaListAlt, FaPencilAlt, FaTh, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { FaChartSimple, FaMessage } from 'react-icons/fa6';
import { BiSolidFaceMask } from 'react-icons/bi';

import { IoNotificationsSharp } from 'react-icons/io5';
import { useState } from 'react';

// import { Children } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false)
    const toggle=()=>{
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
        <section className={`navbar bg-gray-100 pl-4 py-4 h-screen  transition ease-in-out ${isOpen ? "w-[300px]" : "w-[75px]"} `}>
            <div className="row  flex items-center justify-center pr-4">
                <div className="column">
                    <img className={`${isOpen ? "logo w-[25%]":"hidden"}`} src={logo} alt="Logo" />
                </div>
                <div className="column">
                    <button onClick={toggle}>
                        {
                            isOpen ?  <FaTimes className='text-lg' /> :<FaBars className='text-xl pl-1'/>
                        }
                    </button>
                </div>
                
            </div>

            <div className="row">
                <div className="column">
                    <ul className='menu'>
                        {menu.map((item, index) => (
                            <li key={index} className=' pl-'>
                                <Link to={item.path} className='flex items-center pl-4 py-3 my-2 gap-4 hover:bg-white transition ease-in-out3. delay-150 rounded-l-lg'>
                                    <div className='text-lg '>{item.icon}</div>
                                    <div className={` leading-none ${isOpen ? "text-lg" : "hidden"}`}>{item.name}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;
