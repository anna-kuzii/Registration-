import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

const infoContent = ({ email }) => (
  <div className="check-email">
    <h3>Check your email { email }</h3>
    <p>If there&#39;s Sport News account linked to this email address, we&#39;ll send over
      instructions to reset your password.</p>
  </div>
);

const mapStateToProps = ({ user: { email }}) => ({
  email,
});

infoContent.propTypes = {
  email: PropTypes.string,
};

export default connect(mapStateToProps)(infoContent);
