import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';



const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav style={{display:"inline"}}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </nav>

          <hr />

          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}




export default App