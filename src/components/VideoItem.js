import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div className="columns is-vcentered" onClick={() => {onVideoSelect(video)}} style={{cursor: "pointer"}}>
            <div className="column is-one-fifth">
                <figure className="image video-thumbnail">
                <img src={video.snippet.thumbnails.medium.url} alt=""/>
                </figure>
            </div>
            <div className="column">
                <h6 className="title is-6">
                    {video.snippet.title}
                </h6>
            </div>
        </div>
    );
}

export default VideoItem;