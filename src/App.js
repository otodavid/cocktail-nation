import { Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import './App.scss';
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Tools from './pages/Tools';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tools" component={Tools} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
