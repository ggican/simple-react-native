import * as React from 'react';
import {View, ScrollView, Text} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormSubmit from '../../components/Form/FormSubmit';
import FixedPositionView from '../../components/FixedPositionView';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{flex: 1}}>
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
        <Text>ikhsan mahendri</Text>
        <FormSubmit title="Sign in"></FormSubmit>
        {/* <FormSubmit title="Sign in"></FormSubmit> */}
      </FixedPositionView>
    </View>
  );
};

export default Login;
