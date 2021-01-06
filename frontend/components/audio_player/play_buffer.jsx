import React from "react";
import PlayPage from './play_page_container';


class PlayBuffer extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchAllUserPacks()
    this.props.fetchMeditation(this.props.match.params.meditationId)
  }

  render() {
    if(this.props.currentMed) {
      console.log(this.props.currentMed.id)
      console.log(this.props.currentMedId)
    }
    debugger
    return (this.props.currentMed && this.props.uPacks.length > 0 && this.props.currentMedId == this.props.currentMed.id) ? (
      <PlayPage currentMed={this.props.currentMed} userPacks={this.props.uPacks} />
    ) : (
      null
    )
  }
}

export default PlayBuffer;