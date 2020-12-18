import './App.css';
import { BrowserRouter, Switch, Route , Link} from 'react-router-dom'

import Home from './components/home'
import About from './components/about'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/" exact children={<Home />}/>
        <Route path="/about" exact children={<About />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
