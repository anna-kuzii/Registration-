import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import { loadingData } from './actions';
import { connect } from 'react-redux';
import './style.scss';

const CallComponent = ({ loadingData, match }) => {
  useEffect(() => {
    loadingData(match.params.token);
  });

  return (
    <Loader />
  );
};

const mapDispatchToProps = {
  loadingData,
};

CallComponent.propTypes = {
  match: PropTypes.string,
  loadingData: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CallComponent);
