import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video = {video} onVideoSelect = {onVideoSelect} key = {video.id.videoId}/>
    })
    
    return(
        <div className="container">
            {renderedList}
        </div>
    );
}

export default VideoList;