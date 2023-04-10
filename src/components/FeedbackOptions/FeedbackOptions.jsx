export const FeedbackOptions = ({
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => (
  <div>
    <button onClick={onGoodClick}>Good</button>
    <button onClick={onNeutralClick}>Neutral</button>
    <button onClick={onBadClick}>Bad</button>
  </div>
);
