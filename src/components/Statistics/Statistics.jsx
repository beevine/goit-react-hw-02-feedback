import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.cathegory}>
          Good: <span>{good}</span>
        </p>
      </li>

      <li className={css.item}>
        <p className={css.cathegory}>
          Neutral: <span>{neutral}</span>
        </p>
      </li>

      <li className={css.item}>
        <p className={css.cathegory}>
          Bad: <span>{bad}</span>
        </p>
      </li>

      <li className={css.item}>
        <p className={css.cathegory}>
          Total: <span>{total}</span>
        </p>
      </li>

      <li className={css.item}>
        <p className={css.cathegory}>
          Positive feedback: <span>{percentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
