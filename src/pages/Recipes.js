import { GradientBackground } from "../components/GradientBackground";
import recipePic from '../assets/recipe.jpg'
import { Button } from '../components/Button';
import { RecipeContainer } from '../components/RecipeContainer'
import styles from './Recipes.module.scss';
import { useEffect, useRef } from "react";

const Recipes = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className={styles.recipes}>
            <GradientBackground bgImage={recipePic}>
               <h2>Search <span>Cocktails</span></h2>
               <p>
                Search for your favorite recipe or try something new with our up-to-date recipes
               </p>
               <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="Search name">Search name</label>
                        <input ref={inputRef} type="text"/>
                        <Button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </Button>
                    </div>
               </form>
            </GradientBackground>

            <div className={styles.allRecipes}>
                <h3>All <span>Recipes</span></h3>
                <RecipeContainer />

            </div>
        </div>
    )
}

export default Recipes
