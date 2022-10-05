import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <span style={{ color: 'grey' }}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
