// begin reducer
import {servicesAction} from '../../reducers';
// end reducer

const service = {
  logout: ({dispatch, data}) => {
    servicesAction(dispatch).reduxLogout({
      reducer: 'service',
      key: 'token',
      group: 'user',
      type: 'CLEAR',
    });
    servicesAction(dispatch).reduxLogout({
      reducer: 'service',
      key: 'auth',
      group: 'user',
      type: 'CLEAR',
    });
  },
};

export default service;
