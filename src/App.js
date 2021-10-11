import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adminpanel from './Admin/Adminpanel'

import AddNewEmployee from './Admin/AddNewEmployee'
import Login from './Component/Login';


const App = () => {
  return (
    <Router>
    <div className="App">
    <Login/>
      <Switch>
        <Route path="/addnewemployee">
          <AddNewEmployee/>
        </Route>
       

        <Route path="/">
          <Adminpanel/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
