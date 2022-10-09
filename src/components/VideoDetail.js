import React from "react";

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <div className="box">
            <figure className="image is-16by9"  style={{marginBottom: "1rem"}} >
                <iframe src={videoSrc} className = "has-ratio" title="video"/>
            </figure>
            <h5 className="title is-5">{video.snippet.title}</h5>
            <div className="content">
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail