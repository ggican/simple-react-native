import * as React from 'react';
import {ScrollView} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';
import FixedPositionView from '../../components/FixedPositionView';
import Container from '../../components/Container';

const Login = () => {
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
    if (!isError) {
      console.log('masuk sin post data');
    }
  };

  const onGetValue = ({name, value, isError}) => {
    form[name].value = value;
    form[name].isError = isError;
    form[name].isSuccess = !isError;

    setDisabledButton(onCheckFormError());
    setForm(form);
  };

  return (
    <Container style={{flex: 1}}>
      <ScrollView>
        <FormInput
          placeholder="Username"
          error={isErrorUserName}
          label="Username"
          name="username"
          onGetValue={onGetValue}></FormInput>
        <FormInput
          error={isErrorFormPassword}
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
