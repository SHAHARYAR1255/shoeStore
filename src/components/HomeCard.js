import React from 'react';
// import {Link} from 'react-router-dom'
import './Store.css';

function HomeCard({shoe}) {

   return(
      <div className="card" key={shoe.name}>
        <img className="card__img"  src={shoe.img} alt="" />
          <div className="card__text">
            <h4>{shoe.name}</h4>
          </div>
      </div>
        )
        }

export default HomeCard
