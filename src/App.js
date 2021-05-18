import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import test from "./components/test";
import test2 from "./components/test2";
import './App.scss';

const { Route, Switch } = require("react-router");

function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={test} />
          <Route path="/test2" component={test2} />
        </Switch>
      </div>
      
      <main></main>
      
      <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
