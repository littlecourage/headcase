import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";


 const PackFooter = ({expanded, pack, handleAdd, handleExpand, userPacks, className}) => {
  return (expanded) ? (
    <div className={className}>
      <span onClick={handleExpand}><IoIosArrowDropup /></span>
    </div>
  ) : (
    <div className={className}>
        <span onClick={handleExpand}><IoIosArrowDropdown /></span>
    </div>
  )
 }

 export default PackFooter;