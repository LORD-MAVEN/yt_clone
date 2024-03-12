import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { YOUTUBE_CHANNEL_API1, YOUTUBE_CHANNEL_API2 } from "../utils/constants";

const ChannelPage = () => {
    const [channelInfo, setChannelInfo] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const channel_id = searchParams.get("v");

    useEffect(() => {
        const getChannel = async () => {
            try {
                const data = await fetch(YOUTUBE_CHANNEL_API1 + channel_id + YOUTUBE_CHANNEL_API2);
                const json = await data.json();
                setChannelInfo(json);
                console.log("ChannelPage")
            } catch (error) {
                console.error("Error fetching channel data:", error);
            }
        };
        getChannel();
    }, [channel_id]);

    console.log(channelInfo);

    const image = channelInfo?.items[0]?.snippet?.thumbnails?.high.url;
    const title = channelInfo?.items[0]?.snippet.title
    const description = channelInfo?.items[0]?.snippet.description
    return (
        <div className="flex flex-col justify-center w-full">
           <div className="w-full flex items-center justify-around h-[500px] py-5 px-[50px] bg-gray-700 font-serif text-white rounded-md">
           <img className="rounded-full mt-16  w-[200px]" src={image} alt="" /> 
           <div className="text-6xl font-bold tracking-wider pt-[100px] ml-[400px] ">{title}</div>
            </div>  
            <div className="pl-2 text-[1.8rem] bg-gray-200 h-screen pt-3">
               
                <div className="mt-5 px-10 font-bold text-2xl">About:</div>
                <div className="mt-1 px-10 text-[1.1rem] font-extralight font-serif rounded-md text-justify  p-2">
                    {description}
                </div>
            </div> 
        </div>
    );
};

export default ChannelPage;
