import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  };
}

function mapDispatchProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Stream);