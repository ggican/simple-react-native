import React from 'react';
import {View} from 'react-native';
import containerStyle from './index.style';

const Container = (props) => {
  const {children} = props;

  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem,
        vitae adipisci sed itaque assumenda neque animi placeat libero modi
        deleniti voluptatibus omnis laborum accusantium iusto repellendus
        quaerat numquam ipsa?
      </Text>
    </View>
  );
};

export default Container;
