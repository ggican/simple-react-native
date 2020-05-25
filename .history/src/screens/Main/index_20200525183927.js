import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View} from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" />
    </View>
  );
}

export default HomeScreen;
