import React from 'react';
import {View, Text} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title}) => {
  return (
    <Button
      style={formSubmitStyle.style}
      title="Sign in"
      onPress={() => signIn({username, password})}
    />
  );
};

export default FormSubmit;
