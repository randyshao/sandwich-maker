import React from 'react';
import classes from './Sandwich.css';
import Ingredient from './Ingredient/Ingredient';

const sandwich = (props) => { 
    return (
        <div className={classes.sandwich}>
            <Ingredient type="bread-top" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />
        </div>
    );  
};

export default sandwich;