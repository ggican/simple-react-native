// begin reducer
import {servicesAction} from '../../reducers';
// end reducer

const service = {
  pokemonList: ({dispatch, params}) => {
    servicesAction(dispatch).reduxFetch({
      reducer: 'service',
      method: 'GET',
      url: '/pokemon',
      group: 'pokemon',
      key: 'pokemonList',
      params: params,
      message: {
        200: {
          mode: {
            use: 'alert',
            type: 'success',
            timeOut: 3000,
          },
          text: 'Success Get Ingredients',
        },
      },
    });
  },
};

export default service;
