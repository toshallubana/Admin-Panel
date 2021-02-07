import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(true);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  }

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer click={drawerToggleClickHandler} />;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

  return (
    
    <div className="App" style={{height: '100%'}} >
      <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
      {/* <SideDrawer show={setSideDrawerOpen}/> */}
      {/* {sideDrawer} */}
      {backdrop}

      <Router>
      {sideDrawer}
          <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path ="/Dashboard">
                <Dashboard />
            </Route>
          </Switch>
      </Router>

      
      {/* <main style={{marginTop: '64px'}}>
        <p>Hello I'm toshal</p>
      </main> */}
      
    </div>
  );
}

export default App;
