import React from "react";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Webpage from "./Component/Web";


function App() {
  return (
   <div>
   <Router>
    <Routes>
      <Route path="web" Component={Webpage}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
