import React from 'react';
import {View, Button} from 'react-native';
import Container from '../../components/Container';

const SettingScreen = () => {
  return (
    <Container>
      <View>
        <Button title={title} onPress={onSubmit}>
          Logout
        </Button>
      </View>
    </Container>
  );
};

export default SettingScreen;
