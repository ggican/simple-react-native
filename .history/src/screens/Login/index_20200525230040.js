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
  const [isDisabledButton, setDisabldButton] = React.useState(true);
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
    let isError = false;
    for (let key in form) {
      if (!form[key].isSuccess) {
      }
    }
  };

  const onGetValue = ({name, value, isError}) => {
    form[name].value = value;
    form[name].isError = isError;
    form[name].isSuccess = !isError;
    for (let key in form) {
      if (!form[key].isSuccess) {
      }
    }
    console.log(findError);
    setForm(form);
  };
  return (
    <Container style={{flex: 1}}>
      <ScrollView>
        <FormInput
          placeholder="Username"
          value={form.username.value}
          error={isErrorUserName}
          label="Username"
          name="username"
          onGetValue={onGetValue}></FormInput>
        <FormInput
          error={isErrorFormPassword}
          label="Password"
          placeholder="Password"
          name="password"
          value={form.password.value}
          onGetValue={onGetValue}
          secureTextEntry></FormInput>
      </ScrollView>
      <FixedPositionView styles={{bottom: 0, left: 0, right: 0}}>
        <FormSubmit
          isDisabled={isDisabledButton}
          onSubmit={onSubmitForm}
          title="Sign in"></FormSubmit>
      </FixedPositionView>
    </Container>
  );
};

export default Login;
