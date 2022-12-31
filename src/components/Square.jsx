import React from 'react'
//import "./Square.scss"
const Square = ({value, onClick}) => {
  
  // const clickHandler=(value,onClick)=>{

  // }
  return (
    <button type="button"  className="square" onClick={onClick}>{value}</button>
  );
};

export default Square