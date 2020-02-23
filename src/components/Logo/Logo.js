import React from 'react';
import sandwichLogo from '../../assets/images/sandwich-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={sandwichLogo} alt="MySandwich" />
    </div>
);

export default logo;