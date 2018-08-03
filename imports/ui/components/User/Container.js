import { connect } from 'react-redux';
import Component from './Component';
import { compose, withStateHandlers } from 'recompose';

const mapStateToProps = state => ({
    user: state.user.info
});

const enhacer = compose(
    connect(mapStateToProps),
    withStateHandlers(
        ({ initial = '1' }) => ({
          activeTab: initial,
        }),
        {
            toggleTab: ({activeTab}) => (value) => ({ activeTab: value })
        }
    ),
    withStateHandlers(
        ({ initial = false }) => ({
          activeModal: initial,
        }),
        {
            toggleModal: ({activeModal}) => () => ({ activeModal: !activeModal })
        }
    )
);

export default enhacer(Component);