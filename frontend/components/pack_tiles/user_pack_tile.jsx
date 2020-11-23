import React from 'react';

const UserPackTile = ({ pack }) => {
  let colorStyle = {
    backgroundColor: "#5A6175",
    width: "20%",
  }
  let textColor = {
    color: "#5A6175"
  }
  
  return (
    <div className="pack">
      <img src={pack.thumbnailUrl} />
      <div className="pack_text" >
        <h4 style={textColor}>user pack!</h4>
        <h4>User pack!</h4>
        <div>
          <span style={textColor}>2 of 10</span>
          <div className="progress_bar_mini">
            <div style={colorStyle} className="mini_rectangle"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserPackTile;