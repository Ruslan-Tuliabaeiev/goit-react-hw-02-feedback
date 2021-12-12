


import React, {Component} from "react";
//import PropTypes from "prop-types";
import style from './feedback.module.css';
import { Control } from "./Control";
  import { Statistic } from "./Statistic";

export class Feedback extends Component {

   handleIncrement = () => {
     this.setState(prevState => {
         return {
             good: prevState.good + 1,
            
         };
     })
       };

       neutralleIncrement = () => {
        this.setState(prevState => {
            return {
             
                neutral: prevState.neutral + 1,
            };
        })
          };
   
          badleIncrement = () => {
            this.setState(prevState => {
                return {
                 
                    bad: prevState.bad + 1,
                   
                };
            })
              };
           
totalNumber = () => {
    return this.state.good + this.state.neutral + this.state.bad;
}

positiveBack = () => {
    return (
(this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)
    )
}

togle = () => {
    this.setState(prevState =>({
        visible: !prevState.visible,
    }))
}



static defaultProps = {
    initialValue: 0,
}

 state = {
    positive: this.props.initialValue,
    total: this.props.initialValue,
     good: this.props.initialValue,
     neutral: this.props.initialValue,
     bad: this.props.initialValue,
 };




render() {
return (
    <div className={style.feedback}>
<h2 className={style.feedbackList}>Please leave feedback</h2>



  <Control
  handleIncrement={this.handleIncrement}
  neutralleIncrement={this.neutralleIncrement}
  badleIncrement={this.badleIncrement}

  />

{this.state.visible   && (

<Statistic 
good={this.state.good}
neutral={this.state.neutral}
bad={this.state.bad}
total={this.totalNumber()}
positive={this.positiveBack()}
/>
)}

    
</div>
)}
}



