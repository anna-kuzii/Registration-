import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';

const Error = ({ errorMsg='Something goes wrong' }) => (
  <div>
    {errorMsg}
  </div>
);

const mapStateToProps = ({ error: { errorMsg }}) => ({
  errorMsg,
});

Error.propTypes = {
  errorMsg: PropTypes.string,
};

export default connect(mapStateToProps)(Error);
