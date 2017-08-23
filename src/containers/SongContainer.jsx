import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetails from '../components/SongDetails';

class SongContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            focusSong: null,
            chartPosition: null
        };
    }

componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
        if(request.status === 200){
            const jsonString = request.responseText;
            const data = JSON.parse(jsonString);
            this.setState({
                songs: data.feed.entry,
                focusSong: data[0],
            })
        }
    });
    request.send();
}

setFocusSong(song, index){
    this.setState({
        focusSong: song,
        chartPosition: parseInt(index)+1
    });
}

render(){
    return(
    <div>
    <h2>itunes Top 20 Songs</h2>
    <SongSelector songs={this.state.songs}
    selectSong={this.setFocusSong.bind(this)}
    />
    <SongDetails song={this.state.focusSong} chartPosition={this.state.chartPosition}/>
    </div>
    );
}
}

export default SongContainer;