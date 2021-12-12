import React from "react";
import PropTypes from "prop-types";
import style from './feedback.module.css';


export const Statistic = ({good, neutral, bad, total, positive} ) => {


    return (


        <div className={style.statistic} >
        <h2 className={style.statisticName}>Statistics</h2>
    <span className={style.statisticTitle}>Good:{good}</span>
    
    
    <span className={style.statisticTitle}>Neutral:{neutral}</span>
    
    
    <span className={style.statisticTitle}>Bad:{bad}</span>
    
    
    
 <span className={style.statisticTitle}>Total:{total}</span>
    
  <span className={style.statisticTitle}>Positive feedback:{positive}%</span> 
    
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