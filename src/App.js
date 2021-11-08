import Home from './comps/Home'
import Navbar from './comps/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddBlog from './comps/AddBlog'
import BlogPage from './comps/BlogPage';
import About from './comps/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route path='/add'>
            <AddBlog />
          </Route>

          <Route path='/blog/:id'>
            <BlogPage />
          </Route>

        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
