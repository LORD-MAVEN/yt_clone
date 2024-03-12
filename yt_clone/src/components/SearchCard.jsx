import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const SearchCard = ({videoId, thumbnail, title, channelTitle, description, channelId}) => {
    const objToSend = { description: {description},
                        title: {title},
                        channelTitle:  {channelTitle},
                        channelId: {channelId}  
                    };
    const objString = JSON.stringify(objToSend);

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    if(!isMenuOpen){
        return(
        <Link to={"/watch?v=" + videoId +encodeURIComponent(objString)}>
        <div className="flex text-15xl gap-1 mb-5 ml-5 shadow-md w-screen hover:bg-gray-200">
            <img className="h-[15rem] rounded-xl" src={thumbnail} alt="thumbnail" />
            <div className="pl-3">
                <div className="text-xl pb-2">{title}</div>
                <div className="pb-10 flex items-center gap-2">
                <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="" />
                    {channelTitle}
                </div>
                <div className="text-[15px]">{description}</div>
            </div>
        </div>
        </Link>
        )
    }
    return(
        <Link to={"/watch?v=" + videoId +encodeURIComponent(objString)}>
        <div className="flex text-15xl gap-1 mb-5 ml-48 shadow-md hover:bg-gray-200">
            <img className="h-[15rem] rounded-xl" src={thumbnail} alt="thumbnail" />
            <div className="pl-3">
                <div className="text-xl pb-2">{title}</div>
                <div className="pb-10 flex items-center gap-2">
                <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="" />
                    {channelTitle}
                </div>
                <div className="text-[15px]">{description}</div>
            </div>
        </div>
        </Link>
    )
}

export default SearchCard;