import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/dashboard'
import Mainpage from './Components/Mainpage/mainpage'
import generalPlotMap from './Components/General_Plot/generalPlotMap'
import particularPlotMap from './Components/Particular_Plot/paticularPlotMap';
import history from './Components/History/history'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Mainpage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/general' component={generalPlotMap} />
        <Route path='/track_by_id' component={particularPlotMap} /> 
        <Route path='/history' component={history} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
