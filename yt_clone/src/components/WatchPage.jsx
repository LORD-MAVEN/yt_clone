import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import MoreVideos from "./MoreVideos";
import { addComment } from "../utils/commentSlice";

const WatchPage = () => {
    const [searchQuery, setSearchQurery] = useState("");
    const [videos, setVideos] = useState([])

    const comments = useSelector((store) => store.comment)
    const [searchParams] = useSearchParams();
    const video_id = searchParams.get("v").substring(0, 11);

    let video_info = null
    if(searchParams.get("v").substring(11)!=""){
    video_info = JSON.parse(decodeURIComponent(searchParams.get("v").substring(11)));
    }

    const channelId = video_info?.channelId.channelId;
    const title = video_info?.title.title;
    const channel = video_info?.channelTitle.channelTitle;
    const description = video_info?.description.description;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items)
        console.log("Watch_Page")
    };
    const commented = () => {
        dispatch(addComment(searchQuery))
        setSearchQurery("")
    }

    return (
        <div className="flex">
        <div className="w-[700px] pl-6 mt-20">
            <iframe
                className="rounded-md"
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + video_id + "?autoplay=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div className="pt-2 text-[1.3rem] font-semibold">{title}</div>
            <div className="mt-2 w-[1000px] text-xl flex items-center gap-[19rem]">

                <div className="flex items-center justify-center gap-2">
                    <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"/>
                    <Link to={"/channel?v=" + channelId}>
                    <div className="w-48">{channel}</div>
                    </Link>
                    <button className="cursor-pointer ml-7 font-semibold px-2.5 pt-1.5 pb-2 text-sm text-center rounded-full bg-black text-white">Subscribe</button>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex gap-3 items-center bg-gray-100 p-1 rounded-full">
                        <img className="w-8" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-like-icon-png-image_4013523.jpg"/>
                        <div className="h-7 border-[1px]"></div>
                        <img className="w-8 transform scale-[-1]" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-like-icon-png-image_4013523.jpg"/>
                    </div>
                    <div className="bg-gray-100 px-3 gap-1 py-[0.4rem] text-[1rem] rounded-full flex items-center">
                        <img className="w-6" src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-file-download-icon-png-image_4647924.jpg" alt="" />
                        Download
                    </div>
                    <div className="bg-gray-100 px-3 gap-1 py-[0.4rem] text-[1rem] rounded-full flex items-center">
                        Share
                        <img className="w-6" src="https://static.thenounproject.com/png/844668-200.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="mb-10 mt-7 p-3 pr-40 h-40 overflow-y-auto text-justify w-[1000px] rounded-lg bg-gray-200">{description}</div>
            <div>
                <div className="text-xl font-bold">Comments</div>
                <div className="py-2 text-lg flex items-center gap-2 w-[62rem]">
                    <img className="w-7" src="https://cdn-icons-png.freepik.com/512/3177/3177440.png"/>
                    <input className="border-b border-gray-400 w-full border-opacity-70 focus:border-gray-800 border-solid outline-none" type="text" placeholder="Add a comment" onChange={(e) => setSearchQurery(e.target.value)} value={searchQuery}/>
                    <button className="px-1 text-gray-600 text-[1rem] bg-slate-200 rounded-full" onClick={()=>{commented(searchQuery)}}>Comment</button>
                </div>
                <div className="w-full bottom-2 pl-5 pt-5">
                        {(comments.comments.length==0)?<div className="p-5 ml-[20rem] text-[1.2rem] text-gray-400">BE THE FIRST ONE TO COMMENT</div>:comments.comments.map((item, index)=><div className="flex gap-2 items-center" key={index}>
                                                <img className="w-10" src="https://static.thenounproject.com/png/417342-200.png"/>
                                                <div>
                                                    <div className="text-sm">@maven</div>
                                                    <div className="text-lg">{item}</div>
                                                </div>
                                            </div>)}
                </div>
            </div>
        </div>
        <div className="w-[25rem] ml-[23rem] mt-20">
            <div className="text-lg font-semibold pb-2">More Videos:</div>
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
                        <MoreVideos info={item} />
                    </Link>
                )
            })}
        </div>
        </div>
    );
};

export default WatchPage;
