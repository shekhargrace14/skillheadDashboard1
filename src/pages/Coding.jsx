
import { useEffect, useState } from "react"
import Topbar from "../components/Topbar"
import { CiSearch } from "react-icons/ci"
import { FaChevronDown } from "react-icons/fa6"
import { LiaRandomSolid } from "react-icons/lia"
import coding from "../data/coding.json" 
const Coding = () =>{
    const [question, setQuestion]=useState([])
    useEffect(()=>{
        setQuestion(coding)
    })
    console.log(question)

    return(
        
        <div className="flex flex-col  w-full ">
            <Topbar/>
            <div className=" row flex justify-between   p-4">


                <div className="column w-4/5">
                    <section className=" flex justify-between items-center w-full">
                        <form className="flex items-center gap-2 border-[1px] border-gray-400 rounded-full w-fit pl-2 pr-4 py-2">
                            <CiSearch />
                            <input placeholder="Search code question" />
                        </form>
                        <button className="sm:flex justify-between items-center gap-2 px-4 py-2 rounded-full border-[1px] border-gray-300   "><LiaRandomSolid />Pick Random</button>
                    </section>
                    <section className="flex justify-between p-4">
                        <p className="w-6/12 ">Problem Title</p>
                        <p className="w-1/12 ">Difficulty</p>
                        <p className="w-1/12 ">Accuracy</p>
                        <p className="w-1/12 ">Points</p>
                        <p className="w-1/12 ">Action</p>

                    </section>
                    <section className="">
                        {
                            question.map((item,index)=>(
                                <div key={index} className=" flex justify-between items-center p-4 rounded-none border-b-[1px] border-gray-300 hover:bg-[#f6f8fa]"> 
                                    <div className="w-6/12">
                                        <h4 className="">{item.title}</h4>
                                        <ul>
                                            <li className="text-xs">{item.topic}</li>
                                        </ul>
                                    </div>
                                    
                                    <p className="w-1/12 text-xs text-orange-700 capitalize">{item.difficulty}</p>
                                    <p className="w-1/12 text-xs">{item.accuracy}</p>
                                    <p className="w-1/12 text-xs">{item.points}</p>
                                    <div className="w-1/12">
                                        <button className=" text-xs px-6 py-1 rounded-full  border-[1px] border-gray-400  h-fit ">Solve</button>                                  
                                    </div>

                                </div>
                            ))
                        }
                    </section>
                </div>





                <div className="column  w-1/5 p-4">
                    <div className="filter rounded border-[1px] border-gray-400">
                        <div className="px-2 py-2 rounded-none border-b-[1px] border-gray-300">Filters</div>

                        <div className="companies">
                            <div className="  my-2 px-2 pb-2 border-b-[1px] border-gray-300 ">
                                <div className="flex justify-between items-center gap-2">

                                    Companies <FaChevronDown/>
                                </div>
                      
                                <form className="flex items-center gap-2 border-[1px] border-gray-400 rounded-full w-fit px-1 py-1 my-2">
                                    <CiSearch />
                                    <input placeholder="Search code question" />
                                </form>
                                <div className="flex flex-col justify-start gap-2 w-fit pl-2 pr-4 py-2">
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>


                              
        
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="Topics">
                            <div className="  my-2 px-2 ">
                                <div className="flex justify-between items-center gap-2">

                                Topics <FaChevronDown/>
                                </div>
                      
                                <form className="flex items-center gap-2 border-[1px] border-gray-400 rounded-full w-fit px-1 py-1 my-2">
                                    <CiSearch />
                                    <input placeholder="Search code question" />
                                </form>
                                <div className="flex flex-col justify-start gap-2 w-fit pl-2 pr-4 py-2">
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>
                                    <div className="flex gap-2"> <input type="checkbox" id="vehicle1" name="vehicle1" value="Amazon"/><label>Amazon</label> </div>


                              
        
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Coding