import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";


class PackShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
    console.log(this.state)
    this.handleIsUserPack = this.handleIsUserPack.bind(this);
  }

  componentDidMount() {
    this.props.fetchPack(this.props.match.params.packId);
    this.props.fetchAllUserPacks();

  }

  handleIsUserPack() {

  }

  render() {
    const { pack, userPacks } = this.props;
    return (pack) ? (
      <div className="showContainer">
        <div className="showText">
          <h2>{pack.title}</h2>
          <span className="sessions">{pack.length} SESSIONS</span>
          
          <p>Live happier and healthier by learning the 
            fundamentals of meditation and mindfulness.</p>
          
          {userPacks
            .map(uP => uP.packId)
            .includes(pack.id) ? 
            (<div className="selectOrRemove"><span className="icon"><IoIosCloseCircleOutline /></span> 
              <span >&emsp;REMOVE FROM MY PACKS</span></div>) 
            : (<div className="selectOrRemove"><span className="icon"><IoIosAddCircleOutline /></span> 
              <span>&emsp;ADD TO MY PACKS</span></div>)}
        </div>
        <div className="showImg">
          <img 
            src={window.packListening} 
            alt="illustration of someone listening to meditation"/>
        </div>
      </div>
    ) : (
      null
    )
  }
}

export default PackShow;