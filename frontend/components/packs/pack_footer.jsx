import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { FaPlay } from 'react-icons/fa';


 const PackFooter = ({expanded, pack, handleAdd, handleExpand, userPacks, className}) => {
  let added = (userPacks.map(uP => uP.packId).includes(pack.id));
  let currentTrack;
  let num = 1;
  let progress = {
    width: '100%',
    height: '8px',
  }
  let bar = {
    width: 0,
    height: '8px',
    backgroundColor: '#413D47'
  }

  if (added) {
    currentTrack = userPacks.filter(uP => uP.packId === pack.id)[0].currentMeditation.id;
    num = userPacks.filter(uP => uP.packId === pack.id)[0].currentMeditation.order;
    length = userPacks.filter(uP => uP.packId === pack.id)[0].length;
    console.log(num);
    console.log(length);
    if (num > 1) {
      bar.width = ((num - 1)/length) * 100 + "%"
      console.log(bar.width);
      progress.backgroundColor =  'rgba(255, 255, 255, 0.2)'
    }
  } else {
    currentTrack = pack.meditations[0].id;
  }
  
  return (expanded) ? (
    <div className={className}>
      <div className="outer">
        <img src={window.footerImg} alt="background image"/>
        <div className="description">
          <div>
            <Link to={`/play/${currentTrack}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
            <span>Day {num} of {pack.title}</span>
          </div>
          <span onClick={handleExpand}><IoIosArrowDropdown /></span>
        </div>
        <div className="progress" style={progress}>
          <div style={bar}></div>
        </div>
      </div>
    </div>
  ) : (
    <div className={className}>
        <div className="outer">
          <img src={window.footerImg} alt="background image" />
          <div className="description">
            <div>
              <Link to={`/play/${currentTrack}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
              <span>Day {num} of {pack.title}</span>
            </div>
            <span onClick={handleExpand}><IoIosArrowDropdown /></span>
          </div>
          <div className="progress" style={progress}>
            <div style={bar}></div>
          </div>
        </div>
    </div>
  )
 }

 export default PackFooter;