import './App.css';
import Home from './components/Home/Home/Home';
import{
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Login from './components/SharedComponents/Login/Login';
import Navbar from './components/SharedComponents/Navbar/Navbar';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
