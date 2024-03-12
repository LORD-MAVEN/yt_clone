import VideoCard from "./VideoCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import { Link } from "react-router-dom"

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items)
        console.log("video_container")
    };
    return (
        <div className={`grid grid-cols-4 p-2 gap-3 ${isMenuOpen ? 'ml-48' : ''} mt-28`}>
            {videos.map((item) => {
                const objToSend = {
                    description: { description: item.snippet.description },
                    title: { title: item.snippet.title },
                    channelTitle: { channelTitle: item.snippet.channelTitle },
                    channelId: {channelId: item.snippet.channelId}
                }
                const objString = encodeURIComponent(JSON.stringify(objToSend))
                return (
                    <Link key={item.id} to={`/watch?v=${item.id}${objString}`}>
                        <VideoCard info={item} />
                    </Link>
                )
            })}
        </div>
    )
}

export default VideoContainer
