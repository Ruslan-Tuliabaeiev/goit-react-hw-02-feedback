
import React from 'react';
// import PropTypes from "prop-types"
import style from './feedback.module.css';

export const Control = ({handleIncrement, neutralleIncrement, badleIncrement}) => {
    return(
        <div className={style.control}>
        <span className={style.controlList}>
<button className={style.button} type="button" 
onClick={handleIncrement} >Good</button>

<button className={style.button} type="button"
 onClick={neutralleIncrement}>Neutral</button>

<button className={style.button} type="button"
 onClick={badleIncrement} >Bad</button>
</span>
</div>
    )
}

// Control.propTypes = {
//     handleIncrement: PropTypes.button,
//     neutralleIncrement: PropTypes.button,
//     badleIncrement: PropTypes.button,
      
// }

