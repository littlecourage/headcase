import React from 'react';

const UserDashPackIndex = ({packs}) => {

  return <div className="packs">
    {packs.map(pack => {
      let colorStyle = {
        backgroundColor: "#5A6175",
        width: "20%",
      }
      let textColor = {
        color: "#5A6175"
      }
      if (pack && pack.thumbnailUrl.includes('gray')) {
        colorStyle = {
          backgroundColor: "#FFFFFF",
          width: "30%",
        }
        textColor ={
          color: "#FFFFFF"
        }
      }

      console.log(colorStyle);
      console.log(colorStyle.color);
      return (
        <div key={pack.id} className="pack">
          <img src={pack.thumbnailUrl} />
          <div className="pack_text" >
            <h4 style={textColor}>{pack.title}</h4>
            <div>
              <span style={textColor}>2 of 10</span>
              <div className="progress_bar_mini">
                <div style={colorStyle} className="mini_rectangle"></div>
              </div>
            </div>
  
          </div>
        </div>
      );
    })}
  </div>
};

export default UserDashPackIndex;