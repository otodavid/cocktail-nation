import { GradientBackground } from "../components/GradientBackground";
import recipePic from "../assets/recipe.jpg";
import { Button } from "../components/Button";
import { RecipeContainer } from "../components/RecipeContainer";
import styles from "./Recipes.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Recipes = () => {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.search}`
      )
      .then((res) => {
        if (res.data.drinks === null) {
          setData(null);
          setError(
            <p>
              Could not find what you were looking for &#128531;. Please, try
              something else.
            </p>
          );
        } else {
          setData(res.data.drinks);
          setError("");
        }
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  };

  return (
    <div className={styles.recipes}>
      <GradientBackground bgImage={recipePic}>
        <h2>
          Search <span>Cocktails</span>
        </h2>
        <p>
          Search for your favorite recipe or try something new with our
          up-to-date recipes
        </p>
        <form className={styles.form} onSubmit={handleSubmit(handleSearch)}>
          <div className={styles.formGroup}>
            <label htmlFor="search">Search name</label>
            <input
              id="search"
              type="text"
              {...register("search", {
                required: "Please search for something",
              })}
              ref={inputRef}
            />
            <small>{errors.search?.message}</small>
            <Button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>
        </form>
      </GradientBackground>

      <div className={styles.allRecipes}>
        <h3>
          All <span>Recipes</span>
        </h3>

        {error ? (
          <p className={styles.error}> {error} </p>
        ) : (
          <RecipeContainer searchedData={data} />
        )}
      </div>
    </div>
  );
};

export default Recipes;
