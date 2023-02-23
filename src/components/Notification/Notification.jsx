import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;
Notification.propTypes = {
  notifi: PropTypes.string,
};
export default Notification;