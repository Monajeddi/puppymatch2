import {Route, Switch} from 'react-router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import Errors from './Pages/Errors';
import Footer from './Components/Footer/Footer';

import Nav from './Components/Nav/Nav';
import PrivateRoute from './router/PrivateRoute'

import {currentUser} from './JS/actions/user'

import './App.css';
import Contact from './Pages/Contact/Contact';
import Profil from './Pages/Profil/Profil';
import Annonces from './Pages/Annonces/Annonces';
import Description from './Pages/Description/Description'
import AddAnnonce from './Pages/Add/AddAnnonce';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      
      <Nav/>

      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/annonces" component={Annonces}/>
        <PrivateRoute path="/description" component={Description}/>
        <PrivateRoute path="/profil" component={Profil}/>
        <PrivateRoute path="/add_annonce" component={AddAnnonce}/>
        <Route path="/*" component={Errors}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
