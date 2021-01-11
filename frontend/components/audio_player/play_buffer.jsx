import React from "react";
import PlayPage from './play_page_container';


class PlayBuffer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userPack: null
    }
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    //fetching userPacks here was causing weird rerendering issuee
    // this.props.fetchAllUserPacks();
    this.props.fetchMeditation(this.props.match.params.meditationId);
  }

  render() {
    return (this.props.currentMed && this.props.currentMedId == this.props.currentMed.id && this.props.uPacks) ? (
      <PlayPage currentMed={this.props.currentMed} currentUp={this.props.currentUp} uPacks={this.props.uPacks} handleBack={this.handleBack}/>
    ) : (
      null
    )
  }
}

export default PlayBuffer;