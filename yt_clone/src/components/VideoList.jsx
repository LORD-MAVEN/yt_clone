import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API1, YOUTUBE_SEARCH_API2 } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";

const VideoList = () => {
    const [videoItem, setVideoItem] = useState([]);
    const [searchParams] = useSearchParams();
    const videos = searchParams.get("s");

    useEffect(() => {
        const searchVideos = async () => {
            const data = await fetch(YOUTUBE_SEARCH_API1 + videos + YOUTUBE_SEARCH_API2);
            const json = await data.json();
            setVideoItem(json.items);
            console.log("video_list")
        };

        // Delay the API call by 1000 milliseconds (1 second)
        const timer = setTimeout(() => {
            searchVideos();
        }, );

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, [videos]);

    return (
        <div className="mt-20 ml-2">
            {videoItem.map((item, index) => (
                <SearchCard
                    key={index}
                    videoId={item.id?.videoId}
                    thumbnail={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    channelTitle={item.snippet.channelTitle}
                    description={item.snippet.description}
                    channelId={item.snippet.channelId}
                />
            ))}
        </div>
    );
};

export default VideoList;
