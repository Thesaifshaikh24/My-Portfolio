import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import { useState, useEffect } from 'react';
import Loader from "./component/Loader";





const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return(
    <>

    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {/* <h1>welcome to My Portfolio!</h1> */}
          <Home/>
        </div>
      )}
    </div>
    

    <Router>
      <div className="hii">
      
      <Navbar/>
      <Routes>

        {/* <Route path='/' element={<Home/>}/> */}
        
      </Routes>

      </div>


    </Router>
    </>
  )
}
export default App;