import React from 'react';
import Burger from '../../Sandwich/Sandwich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Order is on its way!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
        
        <Button 
            btnType="Danger"
            clicked>CANCEL</Button>
        <Button 
            btnType="Success"
            clicked>CONTINUE</Button>
        </div>
        );
}

export default checkoutSummary;