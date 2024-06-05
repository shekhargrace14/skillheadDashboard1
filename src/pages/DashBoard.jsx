import { useEffect, useState } from "react";

import dashboardDisplay from "../data/dashboardDisplay.json"
import { FaListAlt } from "react-icons/fa";
const DashBoard = () =>{
    const [dashboardData,setDashboardData]= useState([])
    useEffect(()=>{
        setDashboardData(dashboardDisplay)
    })
    console.log(dashboardData)
    return(
        
        <div className="row bg-green-200 w-full py-4 px-4">
            {/* {
                dashboardData.map((items, index)=>(

                ))
            } */}
            <div className="column bg-red-100 py-2 px-4 rounded ">
                <div className="flex justify-between items-center"> 
                    <h3>Registrations</h3>
                    <span className="p-1 text-sm bg-white rounded"><FaListAlt /></span>
                </div>
                <div className="flex gap-4 items-center mt-4">
                    <span className="p-3 bg-white rounded-full"><FaListAlt /></span>
                    <div>
                        <span>0</span>
                        <span>0</span>
                    </div>
                </div>
            </div>

        </div>

        )
}
export default DashBoard;