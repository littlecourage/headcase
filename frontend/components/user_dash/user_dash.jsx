import React from 'react';
import { Redirect } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';


class UserDash extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   addButtonClicked: false,
    //   userPacks: this.props.userPacks
    // }
  }

  // componentDidMount() {
  //   this.props.fetchPacks();
  //   this.props.fetchMeditation(meditation);
  // }

  // handleAddPacks() {
  //   this.setState({
  //     addButtonClicked: true
  //   })
  // }


  render() {
    const progressStyle = {
      backgroundColor: "#5A6175",
      width: "20%",
    }

    if (!this.props.currentUser) {
      return (
        <Redirect to="/" />
      )
    } else {
        return (
          <div className="dashHome">

            <div className="med_box">
              <div className="med_title">
                <h4>Day 3 of 10</h4>
                <h1>Happiness</h1>
                <button><FaPlay/>&emsp;BEGIN</button>
              </div>

              <div className="dashBackground">
                <img src={window.userDashBackgroundUrl} />
              </div>
            </div>
            
    
              <div className="progress_bar">
              <div className="greyRectangle" style={progressStyle}></div>
              </div>
              {/* <div className="transparentRectangle"></div> */}
            
    
            <div className="packsTitle">
              <h1>My packs</h1>
              <span>Themed meditations for specific topics. Each session</span>
              <span>builds on the one before it.</span>
            </div>
    
            <div className="packs">
              <div className="pack">
                <img src={window.packYellow1} />
                <div className="pack_text">
                  <h4>Happiness</h4>
                  <span>2 of 10</span>
                </div>
              </div>
              <div className="pack">
                <img src={window.packTeal1} />
                <div className="pack_text">
                  <h4>Productivity</h4>
                  <span>10 sessions</span>
                </div>
              </div>
              <div className="pack">
                <img src={window.packGray1} />
                <div className="pack_text">
                  <h4 className="pack_text_white">Restlessness</h4>
                  <span className="pack_text_white">3 of 10</span>
                </div>
              </div>
            </div>
    
            <button className="show_button">SHOW MORE</button>
    
          </div>
        ) 
      }

  }



}


export default UserDash;

