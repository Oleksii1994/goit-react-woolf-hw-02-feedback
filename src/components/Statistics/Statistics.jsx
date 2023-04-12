import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { ContainerStatistics } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return total === 0 ? (
    <Notification message="There is no feedbacks yet"></Notification>
  ) : (
    <ContainerStatistics>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>

      <p>Positive feedback: {positiveFeedback}%</p>
    </ContainerStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
