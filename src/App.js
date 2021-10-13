import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import axios from "axios"
import Champinfo from './components/Champinfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Champions from './components/Champions';




function App() {
  
  return (
    <div className="App">
      <Router>
      <NavBar></NavBar>
      
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Champions" component={Champinfo}></Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
