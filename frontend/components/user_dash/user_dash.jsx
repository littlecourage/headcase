import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import UserPackTile from '../pack_tiles/user_pack_tile';


class UserDash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      packsToShow: 3,
      addButtonClicked: false
    }
    this.handleMorePacks = this.handleMorePacks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMorePacks() {
    if (this.state.addButtonClicked === true) {
      console.log(true);
      <Redirect to="/discover" />
    } else {
      this.setState( { addButtonClicked: true, packsToShow: this.state.packsLength } )

    }
  }

  handleClick() {
    const medId = this.props.currentMed.id;
    this.props.history.push(`/play/${medId}`)
  }

  componentDidMount() {
    this.props.showUser(this.props.currentUser.id);
    this.props.fetchAllUserPacks()
    this.setState({
      packsToShow: 3,
      addButtonClicked: false
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.medCompletions.length !== prevProps.medCompletions.length) {
      this.props.fetchAllUserPacks();
    }
  }


  render() {
    const { currentMed, userPacks, currentUp, currentPack, packs } = this.props;
    let progressStyle = {
      backgroundColor: "#413D47",
      width: "20%"
    }
    if (currentPack) {
      progressStyle = {
        backgroundColor: "#413D47",
        width: ((currentMed.order - 1)/currentPack.length) * 100 + "%",
      }

    }
        return (currentUp) ? (
          <div className="dashHome">

            <div className="med_box">
              <div className="med_title">
                <h4>Day {currentMed.order} of {currentPack.length}</h4>
                <h1>{currentPack.title}</h1>
                <button onClick={this.handleClick}>
                  <FaPlay />&emsp;BEGIN
                </button>
              </div>

              <div className="dashBackground">
                <img src={window.footerImg} />
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
              {userPacks.slice(0, this.state.packsToShow).map(userPack => {  
                return (
                <UserPackTile key={userPack.pack.id} pack={userPack.pack} userPack={userPack}/>
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
        ) : (
          null
        )
  }

  



}


export default UserDash;

