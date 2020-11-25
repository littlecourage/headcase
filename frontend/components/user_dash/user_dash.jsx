import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import UserPackTile from '../pack_tiles/user_pack_tile';


class UserDash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      packsToShow: 3,
      addButtonClicked: false
    }
    this.handleMorePacks = this.handleMorePacks.bind(this);
  }

  handleMorePacks() {
    if (this.state.addButtonClicked === true) {
      console.log(true);
      <Redirect to="/discover" />
    } else {
      this.setState( { addButtonClicked: true, packsToShow: this.state.packsLength } )
    console.log(this.state);
    }
  }


  componentDidMount() {
    this.props.fetchAllUserPacks()
    this.setState({
      packsToShow: 3,
      addButtonClicked: false
    })
  }


  render() {
    
      let progressStyle = {
        backgroundColor: "#5A6175",
        width: "20%",
      }

        return (
          <div className="dashHome">

            <div className="med_box">
              <div className="med_title">
                <h4>Day 3 of 10</h4>
                <h1>Happiness</h1>
                {this.props.showModal}
              </div>

              <div className="dashBackground">
                <img src={window.userDashBackgroundUrl} />
              </div>
            </div>
    
              <div className="progress_bar">
                <div style={progressStyle}></div>
              </div>
            
    
            <div className="packsTitle">
              <h1>My packs</h1>
              <span>Themed meditations for specific topics. Each session</span>
              <span>builds on the one before it.</span>
            </div>
    
            
            <div className="packsDash">
              {this.props.packs.slice(0, this.state.packsToShow).map(pack => {  
                return (
                <UserPackTile key={pack.id} pack={pack} />
                ) 
              })}

            </div>

            <button className="show_button" onClick={this.handleMorePacks}>
            {(this.state.addButtonClicked) ? 
              <Link to="/discover" className="Link" > 
                DISCOVER MORE PACKS 
              </Link> : 
              "SHOW MORE" }
            </button>   
        </div>
        ) 
  }

  



}


export default UserDash;

