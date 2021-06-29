import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
import Detail from './component/Detail';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
