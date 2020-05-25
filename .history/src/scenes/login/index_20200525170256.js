import * as React from 'react';
import {View} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';

const AuthContext = React.createContext();

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <View>
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
      <FixedPositionView>
        <FormSubmit
          title="Sign in"
          onPress={() => signIn({username, password})}></FormSubmit>
      </FixedPositionView>
    </View>
  );
};

export default Login;
