import React from 'react';
import PackFooter from './pack_footer';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";


class PackShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.currentUser.id,
      packId: this.props.match.params.packId,
      added: null,
      expanded: false
    }
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }

  componentDidMount() {
    this.props.fetchPack(this.props.match.params.packId);
    this.props.fetchAllUserPacks();
  }

  handleAdd() {
    let newUserPack = { userId: this.state.userId, packId: this.state.packId}
    this.props.createUserPack(newUserPack)
  }

  handleRemove() {
    let packId = this.state.packId;
    let userPacks = this.props.userPacks;
    let userPackId = userPacks.filter((uP) => uP.packId === parseInt(packId))[0].id
    this.props.deleteUserPack(userPackId)
  }

  handleExpand() {
    if (this.state.expanded) {
      this.setState({expanded: false})
    } else {
      this.setState({expanded: true})
    }
  }

  render() {
    const { pack, userPacks } = this.props;
    const { expanded } = this.state;

    return (pack) ? (
      <div>
        <div className="showContainer">
          <div className="showText">
            <h2>{pack.title}</h2>
            <span className="sessions">{pack.length} SESSIONS</span>
            
            <p>Live happier and healthier by learning the 
              fundamentals of meditation and mindfulness.</p>
            
            {userPacks
              .map(uP => uP.packId)
              .includes(pack.id) ? 
              (<div className="selectOrRemove" onClick={this.handleRemove}><span className="icon"><IoIosCloseCircleOutline /></span> 
                <span >&emsp;REMOVE FROM MY PACKS</span></div>) 
              : (<div className="selectOrRemove" onClick={this.handleAdd}><span className="icon"><IoIosAddCircleOutline /></span> 
                <span>&emsp;ADD TO MY PACKS</span></div>)}
          </div>
          <div className="showImg">
            <img 
              src={window.packListening} 
              alt="illustration of someone listening to meditation"/>
          </div>
        </div>
        <div className="pack-footer">
          <PackFooter 
            expanded={expanded} 
            pack={pack} 
            handleAdd={this.handleAdd}
            handleExpand={this.handleExpand}
            userPacks={userPacks}
            className={(expanded) ? "open" : "close" } />
        </div>
      </div>
    ) : (
      null
    )
  }
}

export default PackShow;