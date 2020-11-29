import React from 'react';
import { Link } from 'react-router-dom';


const UserPackTile = ({ pack, userPack }) => {
  let colorStyle = {
    backgroundColor: "#5A6175",
    width: ((userPack.currentMeditation.order - 1) / pack.length) * 100 + "%",
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
      width: ((userPack.currentMeditation.order - 1) / pack.length) * 100 + "%",
    }
  }
  return (userPack.currentMeditation.order > 1) ? (
      <Link to={`packs/${pack.id}`}>
        <div className="pack">

          <img src={pack.thumbnailUrl} />

          <div className="pack_text" >
            <h4 style={textColor}>{pack.title}</h4>
            <div>
            <span style={textColor}>{userPack.currentMeditation.order} of {pack.length}</span>
              <div className="progress_bar_mini">
                <div style={colorStyle} className="mini_rectangle"></div>
              </div>
            </div>

          </div>
        </div>
      </Link>
  ) : (
      <Link to={`packs/${pack.id}`}>
        <div className="pack">
          <img src={pack.thumbnailUrl} />
          <div className="pack_text" >
            <h4 style={textColor}>{pack.title}</h4>
            <div>
              <span style={textColor}>{pack.length} sessions</span>
            </div>
          </div>

        </div>
      </Link>
  )
}

export default UserPackTile;