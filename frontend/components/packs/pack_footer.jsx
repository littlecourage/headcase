import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { FaPlay } from 'react-icons/fa';


 const PackFooter = ({expanded, pack, handleAdd, handleExpand, userPacks, className}) => {
  let added = (userPacks.map(uP => uP.packId).includes(pack.id));
  let currentTrack;
  let num = 1;

  if (added) {
    currentTrack = userPacks.filter(uP => uP.packId === pack.id)[0].currentMeditation.id;
    num = userPacks.filter(uP => uP.packId === pack.id)[0].currentMeditation.order;
  } else {
    currentTrack = pack.meditations[0].id;
  }
  
  return (expanded) ? (
    <div className={className}>
      <img src={window.footerImg} alt="background image"/>
      <div>
        <Link to={`/play/${currentTrack}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
        <span>Day {num} of {pack.title}</span>
        <span onClick={handleExpand}><IoIosArrowDropdown /></span>
      </div>
    </div>
  ) : (
    <div className={className}>
        <img src={window.footerImg} alt="background image" />
        <div>
          <Link to={`/play/${currentTrack}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
          <span>Day {num} of {pack.title}</span>
          <span onClick={handleExpand}><IoIosArrowDropdown /></span>
        </div>
    </div>
  )
 }

 export default PackFooter;