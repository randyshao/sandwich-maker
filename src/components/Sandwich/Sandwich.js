import React from 'react';
import classes from './Sandwich.css';
import Ingredient from './Ingredient/Ingredient';

const sandwich = (props) => {
    console.log(props); 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Build your sandwich!</p>;
    }
    return (
        <div className={classes.Sandwich}>
            <Ingredient type="bread-top" />
            {transformedIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    );  
};

export default sandwich;