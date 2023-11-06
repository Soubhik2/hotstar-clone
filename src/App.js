// import logo from './logo.svg';
import './myindex.css';
import './myresponsive.css';
import TV from './Component/TV';
import Movies from './Component/Movies';
import Sports from './Component/Sports';
import Disney from './Component/Disney';
import Kids from './Component/Kids';
import Footer from './Footer/Footer';
import SignUp from './Component/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TV />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/sports">
            <Sports />
          </Route>
          <Route exact path="/disney">
            <Disney />
          </Route>
          <Route exact path="/kids">
            <Kids />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
