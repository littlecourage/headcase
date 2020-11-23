import React from 'react';

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
      <img src={pack.thumbnailUrl} />
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