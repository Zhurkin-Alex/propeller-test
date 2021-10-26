import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Survey from '../Survey/Survey';
import Data from '../Data/Data';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <div className="container">
          <Switch>
            <Route path="/data" ><Data/></Route>
            <Route path="/"> <Survey/> </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
