import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginAs');
    }, 500);
  });
  return <View style={{flex: 1, backgroundColor: '#000000'}}></View>;
};

export default SplashScreen;
