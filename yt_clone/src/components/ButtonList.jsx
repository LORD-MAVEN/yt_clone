import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if(!isMenuOpen){
       return(
            <div className="mt-14 w-full fixed bg-white" >
                <Button/>
            </div>
       ) 
    }

    return(
        <div className="ml-48 mt-14 w-full fixed bg-white" >
            <Button/>
        </div>
    )
}

export default ButtonList;