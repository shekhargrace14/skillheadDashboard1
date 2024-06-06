import { useEffect, useState } from "react";

import dashboardDisplay from "../data/dashboardDisplay.json"
import dashboardReportJSON from "../data/dashboardReport.json"
import {  FaListAlt, } from "react-icons/fa";
import Topbar from "../components/Topbar";
const DashBoard = () => {
    const [dashboardData, setDashboardData] = useState([])
    const [dashboardReport, setdashboardReport] = useState([])
    useEffect(() => {
        setDashboardData(dashboardDisplay)
    })
    useEffect(() => {
        setdashboardReport(dashboardReportJSON)
    })
    console.log(dashboardData)
    return (


        <div className="flex flex-col  w-full">
            <Topbar />
            <div className="p-4 bg-[#f6f8fa] rounded-2xl">

                {/* <div className="row w-full p-4 rounded-2xl flex flex-wrap justify-between gap-4 items-start bg-white"> */}
                <div className="row w-full p-4  grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-start bg-white">
                    {
                        dashboardData.map((item, index) => (
                            <div key={index} className="column  h-fit  py-4 px-4 rounded-2xl " style={{ background: [item.bgColor] }} >
                                {/* <div key={index} className="column lg:w-[30%] sm:w-[49%] w-[100%] h-fit  py-4 px-4 rounded-2xl " style={{ background: [item.bgColor] }} > */}
                                <div className="flex justify-between items-center">
                                    <h3>{item.title}</h3>
                                    <span className="p-1 text-sm bg-white rounded"><FaListAlt /></span>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <span className="p-3 bg-white rounded-full"><FaListAlt /></span>
                                    <div>
                                        <span>{item.count}</span>
                                        <span>{item.number}</span>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="row w-full p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start bg-white">
                    {
                        dashboardReport.map((item, index) => (
                            <div key={index} className="column  h-fit  py-4 px-4 rounded-2xl border-2 border-gray-100 " style={{ background: [item.bgColor] }} >
                                {/* <div key={index} className="column lg:w-[30%] sm:w-[49%] w-[100%] h-fit  py-4 px-4 rounded-2xl " style={{ background: [item.bgColor] }} > */}
                                <div className="flex justify-between items-center">
                                    <h3>{item.title}</h3>
                                   
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                    <span className="p-3 bg-white rounded-full"></span>
                                    <div>
          
                                        <img src={item.image}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                
            </div>
        </div>



    )
}
export default DashBoard;