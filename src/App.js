import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/homepage/home';
import About from './components/aboutpage/about';
import Projects from './components/projectspage/projects';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
          <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />

          </Switch>

      </Router>
    </div>
  );
}

export default App;
