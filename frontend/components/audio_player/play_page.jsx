import React from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { NavLink, Link } from 'react-router-dom';
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
    this.handleClose = this.handleClose.bind(this);
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
      let ratio = this.audio.currentTime / this.audio.duration;
      if (this.outer) {
        let position = (this.outer.offsetWidth * ratio) + this.outer.offsetLeft;
        this.positionTime(position);
      }
    }

  }

  togglePlay() {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
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

  handleCompletion() {
    this.setState({ play: false })
    let meditationCompletion = {
      userPackId: this.props.currentUp.id,
      meditationId: this.props.currentMed.id
    }
    this.props.action(meditationCompletion);
  }

  componentDidMount() {
    // this.props.fetchMeditation(this.props.currentMedId);
    // this.props.fetchAllUserPacks();
    this.handleTimeUpdate();
    this.audio.addEventListener('loadedmetadata', this.handleMetadata);
    this.audio.addEventListener('ended', this.handleCompletion);
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.uPacks.length !== prevProps.uPacks.length) {
  //     this.props.fetchAllUserPacks();
  //   }
  // }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', this.handleCompletion);
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.removeEventListener('loadedmetadata', this.handleMetadata)
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

  handleClose() {
    if (this.state.play) {
      this.audio.pause();
      this.setState({play: false});
    }
    this.props.handleBack();
  }

  render() {
    let width = 200;
    let ptCt = (this.state.currentTimeUnMod / width) * 100;
    // console.log("currentTime")
    // console.log(this.state.currentTimeUnMod)
    // console.log(ptCt)
    let barStyle = { width: (ptCt) + "%" }

    console.log('play page render')
    console.log(this.props.currentUp)

    return (this.props.currentMed && this.props.currentUp && this.props.currentTrack) ?
      (
        <div className="player">
          <img src={window.footerImg} className="playerBackground" />
          <div className="playContainer">
            <div className="navBox" >
              <span onClick={this.handleClose}>
                <VscChromeClose />
              </span>
            </div>
            <div className="playBox">
              <h4>{this.props.currentUp.pack.title.toUpperCase()}</h4>
              <div className="infoBox">
                <p>DAY {this.props.currentMed.order}/{this.props.currentUp.length}</p>
                <span>{this.state.durMins || "0"} MINUTES</span>
                <div className={this.state.play ? "playing svgs" : "paused svgs"}>
                  <svg id="blob1"  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M49.5,-76.8C63.6,-67.9,74.2,-53.3,81.7,-37.2C89.1,-21.2,93.3,-3.6,90.9,13C88.5,29.7,79.4,45.3,67.4,57.5C55.4,69.7,40.5,78.4,24.6,82.7C8.6,86.9,-8.3,86.5,-24.3,82.2C-40.4,77.8,-55.4,69.4,-66.6,57.3C-77.9,45.1,-85.3,29.2,-87.1,12.9C-88.9,-3.5,-85.1,-20.3,-78,-35.6C-71,-50.9,-60.8,-64.8,-47.2,-74C-33.7,-83.2,-16.8,-87.8,0.4,-88.4C17.7,-89.1,35.3,-85.8,49.5,-76.8Z" transform="translate(100 100)" />
                  </svg>
                  <svg id="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M50.5,-77.7C65.3,-69.1,77.1,-54.8,84.5,-38.6C91.9,-22.3,95,-4.1,91.8,12.7C88.5,29.4,78.9,44.8,66.7,56.4C54.4,68.1,39.6,76,23.8,80.4C8,84.8,-8.7,85.5,-25.2,82.3C-41.8,79.1,-58.2,71.9,-68.8,59.6C-79.3,47.4,-83.9,30.1,-84.9,13.1C-85.9,-3.8,-83.2,-20.3,-77.2,-36C-71.2,-51.7,-61.8,-66.7,-48.4,-75.9C-35,-85.1,-17.5,-88.6,0.2,-88.9C17.9,-89.2,35.7,-86.3,50.5,-77.7Z" transform="translate(100 100)" />
                  </svg>
                  <svg id="blob3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M48.1,-73.3C63.2,-65.3,76.7,-53.2,84.3,-38.1C92,-22.9,93.8,-4.6,91.2,13.1C88.6,30.7,81.6,47.7,70.1,60.5C58.6,73.3,42.6,82,25.6,86.8C8.6,91.7,-9.5,92.7,-26,88.1C-42.4,83.4,-57.3,73,-67.3,59.4C-77.2,45.9,-82.1,29.2,-84.7,12.1C-87.3,-5,-87.5,-22.5,-81.4,-37.7C-75.3,-52.8,-62.8,-65.6,-48.2,-73.8C-33.6,-82,-16.8,-85.7,-0.1,-85.5C16.6,-85.3,33.1,-81.3,48.1,-73.3Z" transform="translate(100 100)" />
                  </svg>
                  <svg id="blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M49.7,-77.4C64.4,-67.9,76.3,-54.1,82.5,-38.3C88.6,-22.6,89,-4.9,85.5,11.5C81.9,27.8,74.3,42.8,63.6,55.1C53,67.4,39.2,77,23.4,83.1C7.6,89.3,-10.1,92.1,-26.4,88.2C-42.7,84.2,-57.6,73.5,-68.1,59.9C-78.7,46.2,-84.8,29.7,-86.4,13C-87.9,-3.8,-84.9,-20.6,-77.8,-35.2C-70.6,-49.8,-59.3,-62.2,-45.6,-72.2C-32,-82.2,-16,-89.7,0.8,-90.9C17.5,-92.1,35,-86.9,49.7,-77.4Z" transform="translate(100 100)" />
                  </svg>
                  <svg id="blob5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M50.4,-77.3C65,-69,76.2,-54.5,83.3,-38.3C90.4,-22,93.3,-4.1,89.7,12.1C86.2,28.3,76.2,42.9,64.9,56.5C53.5,70.2,40.8,83,25.3,88.7C9.8,94.5,-8.6,93,-25.4,87.6C-42.2,82.1,-57.5,72.6,-69.2,59.6C-80.9,46.7,-89.1,30.3,-91.5,13.2C-93.8,-3.9,-90.4,-21.8,-82.3,-36.7C-74.1,-51.7,-61.4,-63.6,-46.9,-71.9C-32.4,-80.2,-16.2,-84.8,0.9,-86.1C17.9,-87.5,35.8,-85.5,50.4,-77.3Z" transform="translate(100 100)" />
                  </svg>
                  <svg id="blob6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#423D47" d="M46,-71.3C59.7,-62.8,70.8,-50.1,78,-35.3C85.1,-20.5,88.4,-3.7,87.1,13.3C85.8,30.2,80,47.2,69.2,60.3C58.4,73.4,42.7,82.6,26.2,86C9.7,89.5,-7.6,87.2,-24.4,82.5C-41.3,77.9,-57.6,71,-69.5,59.2C-81.4,47.3,-88.9,30.6,-90.5,13.6C-92,-3.4,-87.7,-20.7,-80.2,-36.4C-72.7,-52.1,-62.1,-66.1,-48.2,-74.4C-34.3,-82.7,-17.2,-85.4,-0.5,-84.7C16.2,-83.9,32.4,-79.7,46,-71.3Z" transform="translate(100 100)" />
                  </svg>
                  <button onClick={this.togglePlay}>{this.state.play ? <FaPause /> : <FaPlay />}</button>
                </div>
                <div className="slide" ref={(outer) => { this.outer = outer }} onClick={this.handleMouseMove}>
                  <div className="range" ref={(range) => { this.range = range }} onMouseDown={this.handleMouseDown} ></div>
                </div>
                <span>{this.state.currentTime}/{this.state.durTime !== "NaN:NaN" ? this.state.durTime : "00:00"}</span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="playBox">
              {/* empty div for flexbox purposes */}
            </div>
          </div>
        </div>
      ) : (
        null
      )

  }

}

export default PlayPage;

// <span>The meditation clips used for this project are courtesy of
//                 <Link to="https://www.audiodharma.org/" target="_blank">AudioDharma</Link>
//                 and the Insight Meditation Center in Redwood, California</span>