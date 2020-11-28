import React from 'react';

class PlayPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      play: false,
      currentTimeUnMod : 1
    }
    this.audio = new Audio(this.props.currentTrack);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.positionTime = this.positionTime.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchMeditation(this.props.match.params.meditationId);

    if (!this.props.currentUp) {
      this.props.fetchAllUserPacks()
    } 

    this.handleTimeUpdate();
    this.audio.addEventListener('loadedmetadata', () => this.handleMetadata());
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
    this.audio.addEventListener('timeupdate', () => {
      this.handleTimeUpdate();
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.outer.offsetWidth * ratio;
      this.positionTime(position);
    });
  
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    this.audio.removeEventListener('timeupdate', () => {
      this.handleTimeUpdate();
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.outer.offsetWidth * ratio;
      this.positionTime(position);
    })
    this.audio.removeEventListener('loadedmetadata', () => this.handleMetadata() )
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
    this.setState({
        // currentTimeUnMod : this.audio.currentTime,
        currentTime: curMins + ":" + curSecs,
        durTime: durMins + ":" + durSecs,
      })

  }

  positionTime(position) {
    let outerBarWidth = this.outer.offsetWidth - this.range.offsetWidth;
    let rangeLeft = position - this.outer.offsetLeft;

    if (rangeLeft >= 0 && rangeLeft <= outerBarWidth) {
      this.range.style.marginLeft = rangeLeft;
    }
    if (rangeLeft < 0) {
      this.range.style.marginLeft = 0;
    }
    if (rangeLeft > outerBarWidth) {
      this.range.style.marginLeft = outerBarWidth;
    }
  }

  handleMouseMove(e) {
    this.positionTime(e.pageX)
    this.audio.currentTime = (e.pageX / this.outer.offsetWidth) * this.audio.duration;
    console.log("click!")
  }

  handleMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    console.log("clickMD!")
  }

  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }



  render() {
    let width = 400;
    let outerBarStyle = {width: width}
    let ptCt = this.state.currentTimeUnMod / width;
    let barStyle = {width: (width * ptCt), backgroundColor: "purple"}

   return (this.props.currentMed && this.props.currentUp) ?
    (
      <div className="player">
        <img src={window.userDashBackgroundUrl} alt=""/>
        <p>Day {this.props.currentMed.order} / {this.props.currentUp.length}</p>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
         <div className="hp_slide"  ref={(outer) => {this.outer = outer }} onClick={this.handleMouseMove}>
           <div className="hp_range"  ref={(range) => {this.range = range}} onMouseDown={this.handleMouseDown} ></div>
         </div>
        <p>{this.state.currentTime}/{this.state.durTime}</p>
      </div>
    ) : (
      null
    )
  
  }

}

export default PlayPage;