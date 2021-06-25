
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import MyList from './pages/MyList';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppProvider from './components/appContext';
function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies' component={Movies} />
          <Route path='/tvshows' component={TvShows} />
          <Route path='/mylist' component={MyList} />
          <Route path='/contactus' component={ContactUs} />
          <Route path="/Register" component={Login} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
