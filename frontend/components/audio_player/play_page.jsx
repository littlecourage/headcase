import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { TiMediaPause } from 'react-icons/ti';

class PlayPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      play: false,
    }
    this.audio = new Audio(this.props.currentMed.trackUrl);
    this.togglePlay = this.togglePlay.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.positionTime = this.positionTime.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }
  


  componentDidMount() {
    // this.props.fetchMeditation(this.props.currentMedId);
    // this.props.fetchAllUserPacks();
    this.handleTimeUpdate();
    this.audio.addEventListener('loadedmetadata', () => this.handleMetadata());
    this.audio.addEventListener('ended', () => {
      this.setState({ play: false })
      this.handleCompletion();
    });
    this.audio.addEventListener('timeupdate', () => {
      this.handleTimeUpdate();
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = (this.outer.offsetWidth * ratio) + this.outer.offsetLeft;
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
    this.setState({ durMins })
    if (durMins < 10) {
      durMins = "0" + durMins;
    }
    
    this.setState({ durTime: durMins + ":" + durSecs });
  }

  handleTimeUpdate() {
    if (this.audio) {
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
      this.setState({ durMins })
      if (durMins < 10) {
        durMins = "0" + durMins;
      }
      this.setState({
          currentTime: curMins + ":" + curSecs,
          durTime: durMins + ":" + durSecs,
          currentTimeUnMod: this.audio.currentTime
      })
    }

  }

  positionTime(position) {
    let outerBarWidth = this.outer.offsetWidth - this.range.offsetWidth;
    let rangeLeft = position - this.outer.offsetLeft;

    if (rangeLeft >= 0 && rangeLeft <= outerBarWidth) {
      this.range.style.marginLeft = rangeLeft + "px";
    }
    if (rangeLeft < 0) {
      this.range.style.marginLeft = "0px";
    }
    if (rangeLeft > outerBarWidth) {
      this.range.style.marginLeft = outerBarWidth + "px";
    }
  }

  handleMouseMove(e) {
    this.positionTime(e.pageX)
    // console.log("e.pageX")
    // console.log(e.pageX)
    // console.log("this.audio.currentTime")
    this.audio.currentTime = (e.pageX - this.outer.offsetLeft) / this.outer.offsetWidth * this.audio.duration;
    // console.log(this.outer.offsetWidth)
    // console.log(e.pageX / this.outer.offsetWidth)
    // console.log((e.pageX / this.outer.offsetWidth) * this.audio.duration)
    // console.log("click!")
  }

  handleMouseDown(e) {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    // console.log("clickMD!")
  }

  handleMouseUp(e) {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleCompletion() {
    let meditationCompletion = {
      userPackId: this.props.currentUp.id,
      meditationId: this.props.currentMed.id
    }
    this.props.action(meditationCompletion);

  }

  render() {
    let width = 200;
    let ptCt = (this.state.currentTimeUnMod / width) * 100;
    // console.log("currentTime")
    // console.log(this.state.currentTimeUnMod)
    // console.log(ptCt)
    let barStyle = { width: (ptCt) + "%"}
    debugger
    return (this.props.currentMed && this.props.currentUp && this.props.currentTrack) ?
    (
      <div className="player">
        <img src={window.userDashBackgroundUrl} className="playerBackground"/>
        <div className="playContainer">
           <div className="navBox" >
            <span onClick={this.props.handleBack}>
              <VscChromeClose />
            </span>
          </div>
          <div className="playBox">
            <h4>{this.props.currentUp.pack.title.toUpperCase()}</h4>
            <div className="infoBox">
              <p>DAY {this.props.currentMed.order}/{this.props.currentUp.length}</p>
              <span>{this.state.durMins || "0"} MINUTES</span>
               <button onClick={this.togglePlay}>{this.state.play ? <FaPause /> : <FaPlay />}</button>
              <div className="slide"  ref={(outer) => {this.outer = outer }} onClick={this.handleMouseMove}>
                <div className="range"  ref={(range) => {this.range = range}} onMouseDown={this.handleMouseDown} ></div>
              </div>
                <span>{this.state.currentTime}/{this.state.durTime !== "NaN:NaN" ? this.state.durTime : "00:00"}</span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="playBox">
          </div>
        </div>
      </div>
    ) : (
      null
    )
  
  }

}

export default PlayPage;