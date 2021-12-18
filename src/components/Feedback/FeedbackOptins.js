



 const FeedbackOptins = ({options, onLeaveFeedback}) => {
    return (
<div>
{options.map((el) =>(
  <button key={el} type="button" name="{el}" onClick={() => {onLeaveFeedback(el)}}>{el}</button>
    ) )}

</div>


    )
}

export default FeedbackOptins;



































// import React, {Component} from "react";
// //import PropTypes from "prop-types";
// import style from './feedback.module.css';
// import { Control } from "./Control";
//   import { Statistic } from "./Statistic";

// export class Feedback extends Component {

//    handleIncrement = () => {
//      this.setState(prevState => {
//          return {
//              good: prevState.good + 1,
            
//          };
//      })
//        };

//        neutralleIncrement = () => {
//         this.setState(prevState => {
//             return {
             
//                 neutral: prevState.neutral + 1,
                
//             };
//         })
//           };
   
//           badleIncrement = () => {
//             this.setState(prevState => {
//                 return {
                 
//                     bad: prevState.bad + 1,
                   
//                 };
                
//             })
//               };
           


// static defaultProps = {
//     initialValue: 0,
// }





// render() {
// return (
//     <div className={style.feedback}>
// <h2 className={style.feedbackList}>Please leave feedback</h2>



//   <Control
//   handleIncrement={this.handleIncrement}
//   neutralleIncrement={this.neutralleIncrement}
//   badleIncrement={this.badleIncrement}

//   />
      
//  {this.state.visible ?? (
// <h2 className={style.feedbackList}>There is no feedback</h2>        
// )} 


// {this.state.visible && (
// <Statistic 
// good={this.state.good}
// neutral={this.state.neutral}
// bad={this.state.bad}
// total={this.totalNumber()}
// positive={this.positiveBack()}

// />
// )}

    
// </div>
// )}
// }



