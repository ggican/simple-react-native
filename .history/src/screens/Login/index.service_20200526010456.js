// begin reducer
import {servicesAction} from '../../reducers';
// end reducer

const service = {
  reduxLogin: ({dispatch, data}) => {
    servicesAction(dispatch).reduxFetch({
      reducer: 'service',
      method: 'POST',
      url: 'v1/auth/signin',
      group: 'user',
      key: 'auth',
      data: data,
      message: {
        200: {
          mode: {
            use: 'alert',
            type: 'success',
            timeOut: 3000,
          },
          text: 'Success Login',
        },
        400: {
          mode: {
            use: 'alert',
            type: 'success',
            timeOut: 3000,
          },
          text: 'Something Wrong with your username or password',
        },
      },
    });
  },
};

export default service;
