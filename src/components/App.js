import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail"
import youtube from "../API/youtube";


class App extends React.Component {
    state = { videos: [], selectedVideo: null}

    componentDidMount(){
        this.onTermSubmit("dogs");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render(){
        return(
            <div className="container">
                <SearchBar onTermSubmit = { this.onTermSubmit }/>
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="column is-half">
                        <VideoList videos = { this.state.videos } onVideoSelect = { this.onVideoSelect }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;