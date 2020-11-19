import React from 'react';


class UserDash extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

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
            Balance
          </div>
          <div className="pack">
            Happiness
          </div>
          <div className="pack">
            Managing Anxiety
          </div>
        </div>

      </div>
    )

  }



}


export default UserDash;

