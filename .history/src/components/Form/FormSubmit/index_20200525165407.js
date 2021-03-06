import React from 'react';
import {Button} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = ''}) => {
  return (
    <Button
      style={formSubmitStyle.style}
      title={title}
      onPress={() => signIn({username, password})}
    />
  );
};

export default FormSubmit;
