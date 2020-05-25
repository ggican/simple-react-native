import React from 'react';
import {View, Text} from 'react-native';
import containerStyle from './index.style';

const Container = (props) => {
  const {children, style = {}, flex:0} = props;

  return (
    <View style={{...containerStyle, ...style, flex}}>
      {children}
      {/* <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt autem,
        vitae adipisci sed itaque assumenda neque animi placeat libero modi
        deleniti voluptatibus omnis laborum accusantium iusto repellendus
        quaerat numquam ipsa?
      </Text> */}
    </View>
  );
};

export default Container;
