import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import EventDetails from './EventDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events/:id">
            <EventDetails />
          </Route>
          <Route path="/add">
            <Form />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
