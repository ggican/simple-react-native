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
  const onSubmitForm = () => {
    console.log('onPress');

    let errorPassword = false;
    errorPassword = password.length > 0;
    let errorUserName = false;
    errorPassword = password.length > 0;
  };
  return (
    <Container style={{flex: 1}}>
      <ScrollView>
        <FormInput
          placeholder="Username"
          value={username}
          label="Username"
          onChangeText={setUsername}></FormInput>
        <FormInput
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry></FormInput>
      </ScrollView>
      <FixedPositionView styles={{bottom: 0, left: 0, right: 0}}>
        <FormSubmit onSubmit={onSubmitForm} title="Sign in"></FormSubmit>
      </FixedPositionView>
    </Container>
  );
};

export default Login;
