
import Header from './components/Header';
import  {Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header>
      
      </Header>
      <Switch>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
