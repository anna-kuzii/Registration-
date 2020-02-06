import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideAlert } from './actions';
import { AlertMsg } from '../../components/AlertMessage';

const AlertContainerMsg = ({ msg, type, hideAlertMsg }) => (
  msg ? <AlertMsg msg={msg} type={type} hideAlertMsg={hideAlertMsg} /> : null
);

const mapStateToProps = ({ alert: { msg, type }}) => ({
  msg,
  type,
});

const mapDispatchToProps = {
  hideAlertMsg: hideAlert,
};

AlertContainerMsg.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
  hideAlertMsg: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainerMsg);
