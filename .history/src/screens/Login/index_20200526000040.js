import * as React from 'react';
import {ScrollView, Alert, ToastAndroid} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';
import FixedPositionView from '../../components/FixedPositionView';
import Container from '../../components/Container';
import {useStore} from '../../reducers';
import service from './index.service.js';
const getDataPokemon = () => {
  service.pokemonList({dispatch, params: params});
  setParams({
    offset: params.offset + params.limit,
    limit: 10,
  });
  setLoading(true);
};

const Login = () => {
  const {dispatch, state} = useStore();
  const [isLoading, setLoading] = React.useState(false);
  const [isDisbledButton, setDisabledButton] = React.useState(true);
  const [form, setForm] = React.useState({
    password: {
      isError: false,
      value: '',
    },
    username: {
      isError: false,
      value: '',
    },
  });
  const onCheckFormError = (formBody) => {
    let isError = false;
    for (let key in form) {
      if (!formBody[key].isSuccess) {
        isError = true;
      }
    }
    return isError;
  };
  const onSubmitForm = () => {
    let isError = onCheckFormError(form);

    // "phoneNumber":"1234567890",
    // "password":"hi"
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.TO,
      25,
      50,
    );
    // if (!isError) {
    //   setLoading(true);
    //   service.postLogin({
    //     dispatch,
    //     data: {
    //       phoneNumber: form.password.value,
    //       password: form.username.value,
    //     },
    //   });
    // }
  };

  React.useEffect(() => {
    if (isLoading) {
      console.log(state, 'masuk sini');
      setLoading(false);
    }
  }, [isLoading, state]);
  const onGetValue = ({name, value, isError}) => {
    form[name].value = value;
    form[name].isError = isError;
    form[name].isSuccess = !isError;
    setDisabledButton(onCheckFormError(form));
    setForm(form);
  };

  return (
    <Container style={{flex: 1}}>
      <ScrollView>
        <FormInput
          placeholder="Username"
          label="Username"
          name="username"
          onGetValue={onGetValue}></FormInput>
        <FormInput
          label="Password"
          placeholder="Password"
          name="password"
          onGetValue={onGetValue}
          secureTextEntry></FormInput>
      </ScrollView>
      <FixedPositionView styles={{bottom: 0, left: 0, right: 0}}>
        <FormSubmit
          isDisabled={isDisbledButton}
          onSubmit={onSubmitForm}
          title="Sign in"></FormSubmit>
      </FixedPositionView>
    </Container>
  );
};

export default Login;
