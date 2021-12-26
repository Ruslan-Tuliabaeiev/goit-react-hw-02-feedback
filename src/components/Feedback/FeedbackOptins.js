

import PropTypes from "prop-types";

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





FeedbackOptins.propTypes = {
  options: PropTypes.number,
  onLeaveFeedback: PropTypes.number,

  }




