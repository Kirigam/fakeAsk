import { connect } from 'react-redux';
import Component from './Component';
import { compose, withStateHandlers, shouldUpdate } from 'recompose';

const enhacer = compose(
    withStateHandlers(
        ({ initial = false }) => ({
          activeModal: initial,
        }),
        {
            openModal: ({activeModal}) => () => ({ activeModal: !activeModal })
        }
    ),
    withStateHandlers(
        ({ initial = 'signIn' }) => ({
          activeTab: initial,
        }),
        {
          toggleTab: ({activeTab}) => (value) => ({ activeTab: value })
        }
    ),
    shouldUpdate((props ,newProps) => {
        return (!newProps.activeTab) ? (props.activeTab !== newProps.activeTab)
                                    : true;
     })
);

export default enhacer(Component);
