import React from 'react';
import { Link } from 'react-router-dom';

const PackTile = ({ pack }) => {
  
  let colorStyle = {
    backgroundColor: "#413D47",
    width: "20%",
  }
  let textColor = {
    color: "#413D47"
  }

  // if (pack.thumbnailUrl.includes('gray')) {
  //   textColor = {
  //     color: "#FFFFFF"
  //   }

  //   colorStyle = {
  //     backgroundColor: "#FFFFFF",
  //     width: "20%",
  //   }
  // }

  return (
    <div className="pack">
      <Link to={`packs/${pack.id}`}>
            <img src={pack.thumbnailUrl} />
            <div className="pack_text" >
              <h4 style={textColor}>{pack.title}</h4>
              <div>
              <span style={textColor}>{pack.length} sessions</span>
              </div>
            </div>

      </Link>
    </div>
  )
}

export default PackTile;