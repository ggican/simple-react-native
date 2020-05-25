import * as React from 'react';
import {ScrollView, Alert, ToastAndroid} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';
import FixedPositionView from '../../components/FixedPositionView';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import {useStore} from '../../reducers';
import service from './index.service.js';

const Login = () => {
  const {dispatch, state} = useStore();
  const [isLoading, setLoading] = React.useState(false);
  const [isDisbledButton, setDisabledButton] = React.useState(true);
  const [form, setForm] = React.useState({
    password: {
      isError: false,
      value: '',
    },
    handphone: {
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
    if (!isError) {
      setLoading(true);

      service.postLogin({
        dispatch,
        data: {
          phoneNumber: form.handphone.value,
          password: form.password.value,
        },
      });
    }
  };

  const onGetDataLogin = (isLoading, user) => {
    if (isLoading && user?.auth) {
      const {success, message} = user.auth;
      if (message) {
        ToastAndroid.showWithGravity(
          message.text,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
      service.postLoginClear({dispatch});
      setLoading(false);
    }
  };

  const onGetDataLoginCallback = React.useCallback(onGetDataLogin, []);

  React.useEffect(() => {
    if (isLoading && state.user) {
      onGetDataLoginCallback(isLoading, state.user);
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
      <Loading status={isLoading}></Loading>
      <ScrollView>
        <FormInput
          placeholder="1234xxxx"
          label="Handphone"
          name="handphone"
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
