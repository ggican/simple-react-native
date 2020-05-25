// begin reducer
import {servicesAction} from '../../reducers';
// end reducer

const service = {
  postLogin: ({dispatch, data}) => {
    servicesAction(dispatch).reduxLogin({
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
