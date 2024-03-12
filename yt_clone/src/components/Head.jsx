import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API1, YOUTUBE_SEARCH_API2 } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

    const Head = () =>{
    const [searchQuery, setSearchQurery] = useState("");
    const [searchResult, setSearchResult] = useState([""]);
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch();
    const searchCache = useSelector((store) => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery!="") { // Check if searchQuery is not empty
                if (searchCache[searchQuery]) {
                    setSearchResult(searchCache[searchQuery]);
                } else {
                    getSearchSuggestion();
                }
            }
        }, 200);
    
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);
    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API1+searchQuery+YOUTUBE_SEARCH_API2);
        const json = await data.json();
        console.log("head")
        setSearchResult(json?.items)
        dispatch(cacheResults({
            [searchQuery]: json?.items
        }))
        console.log(searchResult)
    }
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    };
    let objString = null
    return(
        <div className="flex h-14 items-center gap-72 p-5 shadow-md fixed z-10 bg-white w-full">
            <div className="flex h-14 items-center gap-2 w-3/12">
                <img onClick={()=>toggleMenuHandler()} className=" w-8 h-6 cursor-pointer" src="https://imgs.search.brave.com/MpyTUiy8iayuNrMiPUanP9U1N42IKwMtWikk2WQMvsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9wTzNPWS5wbmc" alt="sidebar" />
                <Link to={"/"}>
                <img className="cursor-pointer h-14" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" />
                </Link>
            </div>
            <div className="items-center w-8/12">
                <div className="h-8 w-full flex">
                <input className="h-8 p-2 w-full border-2 border-r-0 rounded-l-2xl" type="text" value={searchQuery}
                onFocus={() => {setShowSuggestion(true)}}
                onChange={(e) => setSearchQurery(e.target.value)}/>
                <Link to={"/video?s="+searchQuery} >
                <img className="cursor-pointer w-8 h-8 border-2 rounded-r-2xl p-1 bg-gray-200" src="https://imgs.search.brave.com/TNNwKtX75PpuH-ShjEyY8nQpjIFLW2QBAylY07pgTUw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80Njg3LzQ2ODcz/MTgucG5n" alt="search"/>
                </Link>
                </div>
                {(showSuggestion)?<div 
                onMouseLeave={() => {setShowSuggestion(false)}}
                onMouseEnter={() => {setShowSuggestion(true)}} 
                className="shadow-lg text-sm h-80 w-[565px] p-2 bg-white border-2 absolute top-12 ml-1 rounded-lg overflow-y-scroll">
                <ul>
                    {searchResult.map((query, index) => {
                        const objToSend = {
                            description: {description: query.snippet?.description},
                            title: {title: query?.snippet?.title},
                            channelTitle: {channelTitle: query?.snippet?.channelTitle},
                            channelId: {channelId: query?.snippet?.channelId}
                        }
                        objString = encodeURIComponent(JSON.stringify(objToSend))
                    return(
                        <Link key={index} to={`/watch?v=${query.id?.videoId}${objString}`}>
                        <li key={index} className="hover:bg-gray-200 shadow-sm w-full cursor-pointer flex items-center gap-2 pb-2.5 pt-1" >
                            <img className="w-3 h-3" src="https://imgs.search.brave.com/TNNwKtX75PpuH-ShjEyY8nQpjIFLW2QBAylY07pgTUw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80Njg3LzQ2ODcz/MTgucG5n" />
                            {query?.snippet?.title}
                        </li>
                        </Link>)
                    })}
                </ul>
                </div>:null}
               
            </div>
            <div className="w-20">
                <img className="h-10 w-10 cursor-pointer" src="https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw" alt="user" />
            </div>
        </div>
    )
}

export default Head;