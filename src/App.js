

import FeedbackOptins from './components/Feedback/FeedbackOptins';


import { Component } from 'react';

import { Statistic } from './components/Feedback/Statistic'

import { Section } from './components/Section'
import { Notification } from './components/Notification';


class  App extends Component  {

state = {
  good: 0,
  neutral: 0,
  bad: 0

}

totalNumber = () => {
  return this.state.good + this.state.neutral + this.state.bad;
}

positiveBack = () => {
  return Math.round( (this.state.good * 100) / this.totalNumber())
}
  


   handleIncrement = (name) => {
     this.setState(prevState => ({
      [name]: prevState[name] + 1
     })
  
     )
       };

 



render() {
  const {good, neutral, bad} = this.state;
  const total = this.totalNumber();
  const keys = Object.keys(this.state)
  return (
<>
<FeedbackOptins
options={keys}
 onLeaveFeedback={this.handleIncrement}
/>



<Section title="Statistics" > 
{total > 0 ? (
<Statistic
good={good}
neutral={neutral}
bad={bad}
total={total}
positive={this.positiveBack()}
/>
) : (<Notification 
message='There is no feedback'
/>) } 
</Section>
</>
  )
}


}







export default App;
