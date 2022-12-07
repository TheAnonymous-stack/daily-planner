import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';
import EventDetails from './EventDetails';
import Checklist from './Checklist';
import EditForm from './EditForm';





function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Switch>
          <Route exact path="/daily-planner/">
            <Home />
          </Route>
          <Route path="/events/:id">
            <EventDetails />
          </Route>
          <Route path="/add">
            <Form />
          </Route>
          <Route path="/edit">
            <EditForm />
          </Route>
          <Route path="/daily-planner/checklist">
            <Checklist />
          </Route>
          
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
