import React from 'react';

class PlayPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      play: false
    }
    this.audio = new Audio(this.props.currentTrack);

    this.togglePlay = this.togglePlay.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeditation(this.props.currentMed.id)
    this.handleTimeUpdate();
    this.audio.addEventListener('loadedmetadata', () => this.handleMetadata() )
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.audio.addEventListener('timeupdate', () => this.handleTimeUpdate());
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
  }

  togglePlay() {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  handleMetadata() {
    let durMins = Math.floor(this.audio.duration / 60);
    let durSecs = Math.floor(this.audio.duration - durMins * 60);
    if (durSecs < 10) {
      durSecs = "0" + durSecs;
    }
    if (durMins < 10) {
      durMins = "0" + durMins;
    }
    this.setState({ durTime: durMins + ":" + durSecs });
  }

  handleTimeUpdate() {
    let curMins = Math.floor(this.audio.currentTime / 60);
    let curSecs = Math.floor(this.audio.currentTime - curMins * 60);
    let durMins = Math.floor(this.audio.duration / 60);
    let durSecs = Math.floor(this.audio.duration - durMins * 60);
    if (curSecs < 10) {
      curSecs = "0" + curSecs;
    }
    if (durSecs < 10) {
      durSecs = "0" + durSecs;
    }
    if (curMins < 10) {
      curMins = "0" + curMins; 
    }
    if (durMins < 10) {
      durMins = "0" + durMins;
    }
    this.setState({ currentTime: curMins + ":" + curSecs, durTime: durMins + ":" + durSecs})
  }

  render() {
    return (
      <div className="player">
        <img src={window.userDashBackgroundUrl} alt=""/>
        <p></p>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        <p>{this.state.currentTime}/{this.state.durTime}</p>
      </div>
    )
  }

}

export default PlayPage;