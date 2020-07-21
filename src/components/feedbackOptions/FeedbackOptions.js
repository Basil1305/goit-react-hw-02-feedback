import React from "react";

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <>
      <button type="button" onClick={onClickGood}>
        Good
      </button>
      <button type="button" onClick={onClickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onClickBad}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
