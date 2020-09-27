import React from 'react';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Store from './components/store';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { store} from './components/store';
import StoreByParams from './components/StoreByParams';
import Footer from './components/Footer'; 
import About from './components/About';
 
export const MyContext = React.createContext({});


const  App = ()=> {
  return (
    <MyContext.Provider value={store} >
   <Router>
     <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/store" element={<Store />} />
        <Route path="/store/:params" element={<StoreByParams />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
     <Footer />
   </Router>
   </MyContext.Provider>
  )
}

export default App;

