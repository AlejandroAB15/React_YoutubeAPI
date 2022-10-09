import React from "react";

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }
    
    return(
        <div className="box">
            <h5 className="title is-5">{video.snippet.title}</h5>
            <div className="content">
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail