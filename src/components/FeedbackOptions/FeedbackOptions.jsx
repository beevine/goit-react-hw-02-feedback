import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onHandleClick }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li key={option} className={css.btnItem}>
          <button
            className={css.btn}
            type="button"
            onClick={onHandleClick}
            // option={option}/
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};
