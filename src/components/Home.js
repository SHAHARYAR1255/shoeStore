import React,{useContext} from 'react';
import {MyContext} from '../App';
import HomeCard from './HomeCard';
import {Link} from 'react-router-dom';
import './Store.css';

function Home() {
  const store = useContext(MyContext);
    const keys = Object.keys(store);
    const new_keys = keys.slice(0,2);
   
  return(
    <>
      <h1 className="store__text">New Collection</h1>

      <div className="store">
        {new_keys.map(key =>{
        const shoe = store[key];
        return(
          <HomeCard key={key} shoe={shoe} />
        )
        }
    )}
        <Link to="/store" className="btn align-self-center mt-5 mb-3">TO STORE --&gt;</Link>

    </div>
      </>
     
    
  );
    }

export default Home;
