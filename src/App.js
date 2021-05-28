import { Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import './App.scss';
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Tools from './pages/Tools';
import { Footer } from './components/Footer';
import { createContext, useState } from 'react';
import { RecipeDetails } from './components/RecipeDetails';

export const ModalContext = createContext();

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <div className="App">
      <Header />

      <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tools" component={Tools} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>

        <RecipeDetails />
      </ModalContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
