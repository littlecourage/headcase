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
    this.props.fetchAllUserPacks()
    this.props.fetchMeditation(this.props.match.params.meditationId)
  }

  render() {
    return (this.props.currentMed && this.props.uPacks.length > 0 && this.props.currentMedId == this.props.currentMed.id) ? (
      <PlayPage currentMed={this.props.currentMed} userPacks={this.props.uPacks} handleBack={this.handleBack}/>
    ) : (
      null
    )
  }
}

export default PlayBuffer;