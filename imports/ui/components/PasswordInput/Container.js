import { connect } from 'react-redux';
import Component from './Component';
import { compose, withStateHandlers } from 'recompose';

const enhacer = compose(
    withStateHandlers(
      ({ initial = false }) => ({
        password: '',
      }),
      {
        onChangePassword: ({password}) => (value) =>  ({password: value})
      }
    ),
    withStateHandlers(
        ({ initial = false }) => ({
          isPasswordVisible: initial,
        }),
        {
          onClickPasswordVisible: ({isPasswordVisible}) =>
            () => ({ isPasswordVisible: !isPasswordVisible })
        }
      )
);

export default enhacer(Component);
