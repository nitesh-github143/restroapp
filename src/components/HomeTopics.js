import React from 'react';
import {Text, View} from 'react-native';

const HomeTopics = ({title}) => {
  return (
    <View style={{marginLeft: 10}}>
      <Text
        style={{
          color: '#FFF',
          fontFamily: 'Inter-Medium',
          fontSize: 16,
        }}>
        {title}
      </Text>
      <View style={{backgroundColor: '#FFAD14', height: 2, width: 50}}></View>
    </View>
  );
};

export default HomeTopics;
