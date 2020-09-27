import React from 'react';
import {Link } from 'react-router-dom';
import './Store.css';

export const store = {
  "air-jordan-3-valor-blue": {
  "name": "VALOUR BLUE",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
"jordan-mars-270-london": {
  "name": "JORDAN MARS 270 LONDON",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
"air-jordan-1-zoom-racer-blue": {
  "name": "RACER BLUE",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
"air-jordan-5-valor-blue": {
  "name": "VALOUR BLUE",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
"jordan-mars-2705-london": {
  "name": "JORDAN MARS 270 LONDON",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
},
"air-jordan-5-zoom-racer-blue": {
  "name": "RACER BLUE",
  "img":
    "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
}
};

const Store = () =>{
  const list=  Object.keys(store).map(key =>{
     const shoe = store[key];
     return(
       <Link to={`/store/${key}`} >
      <div className="card" key = {key}>
        <img className="card__img"  src={shoe.img} alt="" />
          <div className="card__text">
            <h4>{shoe.name}</h4>
          </div>
      </div>
     </Link>
   );
 })
   return(
     <>
    <h1 className="store__text">Available Shoes Right Now</h1>
     <div className="store">
       {list}

     </div>
    </>
   );
 }   

 export default  Store; 
