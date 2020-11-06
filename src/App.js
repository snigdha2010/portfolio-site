import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <Router>
      <Switch>
        <Header/>
        <Route path='/home' component={Header}/>
      </Switch>
    </Router>
  );
}

export default App;
