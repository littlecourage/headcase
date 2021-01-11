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
    // this.props.fetchAllUserPacks();
    this.props.fetchMeditation(this.props.match.params.meditationId);
  }

  render() {
    console.log(`pb render: ${this.props.currentUp} ${this.state.userPack}`);
    return (this.props.currentMed && this.props.currentMedId == this.props.currentMed.id && this.props.uPacks) ? (
      <PlayPage currentMed={this.props.currentMed} currentUp={this.props.currentUp} uPacks={this.props.uPacks} handleBack={this.handleBack}/>
    ) : (
      null
    )
  }
}

export default PlayBuffer;