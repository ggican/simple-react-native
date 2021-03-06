import * as React from 'react';
import {ScrollView} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';
import FixedPositionView from '../../components/FixedPositionView';
import Container from '../../components/Container';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isErrorFormPassword, setIsErrorPassword] = React.useState(false);
  const [isErrorUserName, setIsErrorUserName] = React.useState(false);
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
  const onSubmitForm = () => {
    let errorPassword = false;
    errorPassword = password.length < 1;
    let errorUserName = false;
    errorUserName = username.length < 1;

    if (errorUserName && errorPassword) {
      console.log('masuk sini');
    }
    setIsErrorUserName(errorUserName);
    setIsErrorPassword(errorPassword);
  };

  const onGetValue = ({name, value, isError}) => {
    setForm((prevState) => {
      console.log(prevState);
      prevState[name].value = value;
      prevState[name].isError = isError;
      return prevState;
    });
  };
  return (
    <Container style={{flex: 1}}>
      <ScrollView>
        <FormInput
          placeholder="Username"
          // value={form.username.value}
          error={isErrorUserName}
          label="Username"
          name="username"
          onGetValue={onGetValue}></FormInput>
        <FormInput
          error={isErrorFormPassword}
          label="Password"
          placeholder="Password"
          name="password"
          // value={form.password.value}
          onGetValue={onGetValue}
          secureTextEntry></FormInput>
      </ScrollView>
      <FixedPositionView styles={{bottom: 0, left: 0, right: 0}}>
        <FormSubmit onSubmit={onSubmitForm} title="Sign in"></FormSubmit>
      </FixedPositionView>
    </Container>
  );
};

export default Login;
