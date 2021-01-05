import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { ImLock } from "react-icons/im";
import { FaPlay, FaCheck  } from 'react-icons/fa';


 const PackFooter = ({expanded, pack, handleAdd, handleExpand, userPacks, className}) => {
  let added = (userPacks.map(uP => uP.packId).includes(pack.id));
  let meditations = [];
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
    let userPack = userPacks.filter(uP => uP.packId === pack.id)[0]
    currentTrack = userPack.currentMeditation;
    num = userPack.currentMeditation.order;
    length = userPack.length;
    meditations = meditations.concat(Object.values(userPack.meditations));
    if (num > 1) {
      bar.width = ((num - 1)/length) * 100 + "%"
      console.log(bar.width);
      progress.backgroundColor =  'rgba(255, 255, 255, 0.2)';
    }
  } else {
    currentTrack = pack.meditations[0];
    meditations = meditations.concat(pack.meditations)
  }
  
  return (expanded && meditations) ? (
    <div className={className}>
        <img src={window.footerImg} alt="background image"/>
      <div className="outer">
        <img src={window.footerImg} alt="background image" />
        <div className="description">
          <div>
            <Link to={`/play/${currentTrack.id}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
            <span>Day {num} of {pack.title}</span>
          </div>
          <span onClick={handleExpand}><IoIosArrowDropdown /></span>
        </div>
        <div className="progress" style={progress}>
          <div style={bar}></div>
        </div>
      </div>
      <div className='meditation'>
        {added ? (
          meditations.map(med => {
            return (
            <div key={med.id}>
              {
                (med.order < currentTrack.order) ?
                  <Link to={`/play/${med.id}`} className="check-icon"><FaCheck /></Link>
                : ((med.order === currentTrack.order) ? (
                  <Link to={`/play/${med.id}`} className="play-icon"><FaPlay /></Link>
                ) : (
                  <Link to={null} className="lock-icon"><ImLock/></Link>
                ))
              }

              <span>Session {med.order}</span>
            </div>)
          })
        ) : (  
          meditations.map(med => {
            return (
            <div key={med.id}>
              {
                (med.order === 1) ? (
                  <Link to={`/play/${med.id}`} className="play-icon">
                    <FaPlay /> 
                  </Link>
                ) : (
                  <Link to={null} className="lock-icon">
                    <ImLock />
                  </Link>
                )
              }
              <span>Session {med.order}</span>
            </div>
            )
          })
        )}
      </div>
    </div>
  ) : (
    <div className={className}>
          <img src={window.footerImg} alt="background image" />
        <div className="outer">
          <div className="description">
            <div>
              <Link to={`/play/${currentTrack.id}`} onClick={added ? null : handleAdd}><FaPlay />&#8239;&ensp;BEGIN</Link>
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