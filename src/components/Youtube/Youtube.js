import React , {useRef} from "react";
import "./Youtube.css";

const Youtube = ({ videoId, startTime, endTime }) => {
    const iframeRef = useRef(null);
    //Function to play video when mouse enters the video
    const playVideo = () => {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    //Function to pause video when mouse leaves the video
    const pauseVideo = () => {
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    return (
        <div className="youtube-container" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <iframe 
                width="100%" 
                height="315" 
                src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Youtube;
