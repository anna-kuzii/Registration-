import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

export const AlertMsg = ({ msg, type, hideAlertMsg }) => {
  useEffect(() => {
    const timeout = setTimeout(() => hideAlertMsg(), 3000);

    return () => clearTimeout(timeout);
  }, [hideAlertMsg]);

  return (
    <div className={classnames('alert-msg', type)}>{msg}</div>
  );
};

AlertMsg.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
  hideAlertMsg: PropTypes.func,
};

