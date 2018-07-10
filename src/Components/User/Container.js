import React from 'react';
import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = state => ({
    user: state.user.info
});

export default connect(mapStateToProps)(Component);