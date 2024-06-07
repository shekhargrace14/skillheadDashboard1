import { FaBell, FaEye, FaUser } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"

const Topbar = ()=>{
    return(
        <div className="row bg-white flex justify-between items-center p-4 shadow">
            <div className="column">
                <button className="sm:flex justify-between items-center gap-2 rounded-full px-4 py-2 rounded-full border-[1px] border-gray-400 hidden"><FaEye/> Preview</button>
            </div>
            <div className="column sm:block hidden">
                <p>Opportunity Dashboard | test</p>
            </div>
            <div className="column flex justify-between items-center gap-4 text-1xl cursor-pointer">
                <FaMessage/>
                <FaBell/>
                <FaUser/>
            </div>
        </div>

    )
}
export default Topbar