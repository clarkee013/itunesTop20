import React from 'react';

class SongDetails extends React.Component {
  render(){
    if(!this.props.song){
      return null;
    }

    return (
      <div>
      <h3>{this.props.song["im:name"].label}</h3>
      <h3>{this.props.song["im:artist"].label}</h3>
      <img src={this.props.song["im:image"][2].label} alt={this.props.song["im:artist"]}/>
      <h2>{this.props.song["im:releaseDate"].label}</h2>
      </div>
    );
  }
}

export default SongDetails;