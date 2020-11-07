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
import About from './components/About/About';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className='app'>
      
    <Router>
       <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
      <Switch>
        <Route path='/projects' component={Projects} />
      </Switch>
       <Footer/>
    </Router>
    </div>
  );
}

export default App;
