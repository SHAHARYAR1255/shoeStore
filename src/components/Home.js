import React,{useContext} from 'react';
import {MyContext} from '../App';
import HomeCard from './HomeCard';
import {Link} from 'react-router-dom';
import './Store.css';

function Home() {
  const store = useContext(MyContext);
    const keys = Object.keys(store);
    const new_keys = keys.slice(0,2);
    const param1= new_keys[0];
    const param2= new_keys[1];
   
  return(
    <>
      <h1 className="store__text">New Collection</h1>

      <div className="store">
       
          <HomeCard param={param1} shoe={store[param1]} />
          <HomeCard param={param2} shoe={store[param2]} />

        <Link to="/store" className="btn align-self-center mt-5 mb-3">TO STORE --&gt;</Link>

    </div>
      </>
     
    
  );
    }

export default Home;
