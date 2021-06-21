import styles from "./RecipesList.module.scss";
import { RecipeItem } from "../RecipeItem";
import { useContext } from "react";
import { SingleDataContext, ModalContext, RecipesDataContext } from "../../App";

const RecipesList = ({ searchedData }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const { setSingleData } = useContext(SingleDataContext);

  const { recipesData } = useContext(RecipesDataContext);

  return (
    <div className={styles.container}>
      {searchedData && searchedData.length > 0
        ? searchedData.map((recipe) => (
            <div
              key={recipe.idDrink}
              onClick={() => {
                setIsModalOpen(true);
                setSingleData(recipe);
              }}
            >
              <RecipeItem data={recipe} />
            </div>
          ))
        : recipesData.map((recipe) => (
            <div
              key={recipe.idDrink}
              onClick={() => {
                setIsModalOpen(true);
                setSingleData(recipe);
              }}
            >
              <RecipeItem data={recipe} />
            </div>
          ))}
    </div>
  );
};

export default RecipesList;
