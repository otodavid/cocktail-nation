import { Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import './App.scss';
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Tools from './pages/Tools';
import { Footer } from './components/Footer';
import { createContext, useEffect, useState } from 'react';
import { RecipeDetails } from './components/RecipeDetails';
import axios from 'axios';

export const ModalContext = createContext();
export const SingleDataContext = createContext();
export const RecipesDataContext = createContext()

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    try {
      const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
          
      const resData = res.data.drinks;
  
      setRecipesData(resData);
    } catch {
      console.log("error");
    }
  }
  
  return (
    <div className="App">
      <Header />

      <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
        <RecipesDataContext.Provider value={{recipesData, setRecipesData}}>
          <SingleDataContext.Provider value={{singleData, setSingleData}}>
          
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/tools" component={Tools} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </main>

            <RecipeDetails />
          </SingleDataContext.Provider>
        </RecipesDataContext.Provider>
      </ModalContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
