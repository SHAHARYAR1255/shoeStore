import React,{useContext} from 'react';
import {MyContext} from '../App';
import {useParams} from 'react-router-dom';
// import {store} from './store'
import { Card, CardImg,  CardBody, CardTitle} from 'reactstrap';
import './StoreByParams.css';


function StoreByParams() {
  const store = useContext(MyContext);
  const { params } = useParams();
  let shoe = store[params];
  return(
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
            <Card className="container__card">
                <CardImg className="container__img" src={shoe.img} alt={shoe.name}/>
                <CardBody className="container__body">
                    <CardTitle>{shoe.name}</CardTitle>
                </CardBody>
            </Card>
       `    </div>
            <div className=" col-12 col-sm-12 col-md-6 container__body">
            <hr />
                <h2>Details</h2>
            </div>
        </div>

      </div>
    
  )
}

export default StoreByParams;
  