import React from 'react';
import { Link } from 'react-router-dom';

const PackTile = ({ pack }) => {
  
  let colorStyle = {
    backgroundColor: "#5A6175",
    width: "20%",
  }
  let textColor = {
    color: "#5A6175"
  }

  if (pack.thumbnailUrl.includes('gray')) {
    textColor = {
      color: "#FFFFFF"
    }

    colorStyle = {
      backgroundColor: "#FFFFFF",
      width: "20%",
    }
  }

  return (
    <div className="pack">

      <Link to={`packs/${pack.id}`}>
        <img src={pack.thumbnailUrl} />
      </Link>

      <div className="pack_text" >
        <h4 style={textColor}>{pack.title}</h4>
        <div>
          <span style={textColor}>10 sessions</span>
        </div>
      </div>
      
    </div>
  )
}

export default PackTile;