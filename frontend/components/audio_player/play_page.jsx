import React from 'react';

class PlayPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMeditation(this.props.currentMed.id)
  }

  render() {
    return (
      <div className="player">
        <img src={window.userDashBackgroundUrl} alt=""/>
        <audio controls>
          <source scr={this.props.currentMed.trackUrl} />
        </audio>
      </div>
    )
  }

}

export default PlayPage;