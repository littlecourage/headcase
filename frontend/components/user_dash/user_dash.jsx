import React from 'react';
import { Redirect } from 'react-router-dom';


class UserDash extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    if (!this.props.currentUser) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <div className="dashHome">
          <div className="dashBackground">
            <img src={window.userDashBackgroundUrl} />
          </div>
  
          <div className="rectangles">
            <div className="greyRectangle"></div>
            <div className="transparentRectangle"></div>
          </div>
  
          <div className="packsTitle">
            <h1>My packs</h1>
            <span>Themed meditations for specific topics. Each session</span>
            <span>builds on the one before it</span>
          </div>
  
          <div className="packBox">
            <div className="pack">
              <img src={window.packYellow1} />
            </div>
            <div className="pack">
              <img src={window.packTeal1} />
            </div>
            <div className="pack">
              <img src={window.packGray1} />
            </div>
          </div>
  
          <button className="show_button">SHOW MORE</button>
  
        </div>
      )
    }

  }



}


export default UserDash;

