const MoreVideos = ({ info }) => {
    if (!info || !info.snippet || !info.snippet.thumbnails || !info.snippet.thumbnails.medium) {
        return null;
    }

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="py-2 h-[9rem] flex gap-2 shadow-sm rounded-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-100 hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100">
            <img className="rounded-lg h-28 transition-transform duration-300 ease-in-out transform hover:scale-105" src={thumbnails.maxres?.url} alt="" />
            <ul>
                <li className="h-1/3 overflow-hidden text-sm font-semibold p-1 ">{title}</li>
                <li className="p-1 justify-between"><div>{channelTitle}</div><div>{statistics.viewCount} Views</div></li>
            </ul>
        </div>
    );
}

export default MoreVideos;
