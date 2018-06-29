import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import Component from './Component';
import Loader from '../Loader/Component';

const mapStateToProps = state => ({
    commentsList: state.comments.items,
    isFetching: state.comments.isFetching
});

const enhancer = compose(
    connect(mapStateToProps),
    branch(
        ({isFetching}) => isFetching,
        renderComponent(Loader)
    )
);

export default enhancer(Component);