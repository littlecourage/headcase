import React from "react";
import PlayPage from './play_page_container';


class PlayBuffer extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchAllUserPacks()
    this.props.fetchMeditation(this.props.match.params.meditationId)
  }

  render() {
    debugger
    return (this.props.currentMed) ? (
      <PlayPage currentMed={this.props.currentMed} />
    ) : (
      null
    )
  }
}

export default PlayBuffer;