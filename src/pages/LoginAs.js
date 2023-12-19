import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const LoginAs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main_container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginPage')}
        style={styles.button}>
        <Text style={styles.text}>Login / Signup &#x003E;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Continue as Guest &#x003E;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginAs;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFAD14',
    width: '65%',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    height: 47,
    color: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Inter-Bold',
  },
});
