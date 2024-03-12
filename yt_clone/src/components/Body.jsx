import Head from "./Head"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Body = () =>{
    return(
        <div className="flex">
            <Head/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body