
import './App.css';
import Home from './pages/Home/home';
import Movies from './pages/Movies/Movies';
import TvShows from './pages/TvShows/TvShows';
import MyList from './pages/MyList/MyList';
import ContactUs from './pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/tvshows' component={TvShows} />
        <Route path='/mylist' component={MyList} />
        <Route path='/contactus' component={ContactUs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
