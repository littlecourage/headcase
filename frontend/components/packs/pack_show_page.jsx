import React from 'react';
import { Link } from 'react-router-dom';


class PackShow extends React.Component {

  componentDidMount() {
    this.props.fetchPack(this.props.match.params.packId);
  }

  render() {
    const { pack } = this.props;
    return (pack) ? (
      <div>
        <h2>{pack.title}</h2>
      </div>
    ) : (
      null
    )
  }
}

export default PackShow;