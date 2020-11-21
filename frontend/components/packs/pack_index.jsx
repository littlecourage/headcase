import React from 'react';

class PackIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPacks()
  }

  render () {
    const { packs } = this.props;
    let colorStyle = {
      backgroundColor: "#5A6175",
      width: "20%",
    }
    let textColor = {
      color: "#5A6175"
    }
    return (
      <div>
        {packs.map(pack => {

          if (pack && pack.thumbnailUrl.includes('gray')) {
            colorStyle = {
              backgroundColor: "#FFFFFF",
              width: "30%",
            }
            textColor = {
              color: "#FFFFFF"
            }
          }

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

    )
  }


}

export default PackIndex;