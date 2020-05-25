import React from 'react';
import {Button} from 'react-native';
import formSubmitStyle from './index.style';

const FormSubmit = ({title = '', onSubmit = () => {}}) => {
  return (
    <Button style={formSubmitStyle.style} title={title} onPress={onSubmit} />
  );
};

export default FormSubmit;
