import React from "react";
import PropTypes from "prop-types";
import style from './feedback.module.css';


export const Statistic = ({good, neutral, bad, total, positive} ) => {


    return (


        <div className={style.statistic} >
     

   <p className={style.statisticTitle}> <span >Good:{good}</span></p>
    
    
   <p className={style.statisticTitle}> <span>Neutral:{neutral}</span></p>
    
    
   <p className={style.statisticTitle}><span>Bad:{bad}</span></p>
    
    
    
 <p className={style.statisticTitle}><span>Total:{total}</span></p>
    
  <p className={style.statisticTitle}><span>Positive feedback:{positive}%</span> </p>
    
    </div>


    )
}



Statistic.propTypes = {
good: PropTypes.number,
neutral: PropTypes.number,
bad: PropTypes.number,
total: PropTypes.number,
positive: PropTypes.number,
}