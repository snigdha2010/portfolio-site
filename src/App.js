import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SocialNetWork from './components/SocialNetWork/SocialNetWork';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='app'>
      
    <Router>
       <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
