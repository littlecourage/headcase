import React from "react";
import PlayPage from './play_page_container';


class PlayBuffer extends React.Component {

  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    this.props.receiveCurrentMed(this.props.match.params.meditationId);
    // this.props.receiveCurrentUp(this.props.currentUp);
    // this.props.fetchAllUserPacks();
    // this.props.currentUpId && this.props.fetchUserPack(this.props.currentUpId)
    // use action that utilizes new backend route
    // same as get user pack -> util part will go to new backend route
    this.props.fetchMeditation(this.props.match.params.meditationId);
    this.props.fetchMedUserPack(this.props.match.params.meditationId);
  }

  componentDidUpdate(prevProps) {
    //check if meditation id changes and then do new backend call
    if (this.props.currentUpId !== prevProps.currentUpId || this.props.meditationId !== prevProps.meditationId) {
      this.props.fetchMedUserPack(this.props.match.params.meditationId);
    }
  }

  render() {
    console.log('play buffer render')
    console.log(this.props.currentUp)
    console.log(this.props.currentMedId)
    console.log(this.props.included);
    return (this.props.currentMed &&
             this.props.currentMedId == this.props.currentMed.id && 
             this.props.currentUp) ? (
      <PlayPage 
        currentMed={this.props.currentMed} 
        currentUp={this.props.currentUp} 
        uPacks={this.props.uPacks} 
        handleBack={this.handleBack}/>
    ) : (
      null
    )
  }
}

export default PlayBuffer;