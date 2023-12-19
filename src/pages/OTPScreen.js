import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OTPTextInput from 'react-native-otp-textinput';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import InputBox from '../components/InputBox';

const OTPScreen = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.inner_container}>
        <View style={styles.top_container}>
          <Text style={styles.heading_text}>Almost there</Text>
          <Text style={styles.description_text}>
            Please enter the 6-digit code sent to your email{' '}
            <Text
              style={{
                color: '#FFAD14',
                fontSize: 13,
                fontFamily: 'Inter-Medium',
              }}>
              mobile number
            </Text>{' '}
            for verification.
          </Text>
        </View>

        <View style={styles.mid_container}>
          <View style={{alignSelf: 'flex-start'}}>
            <OTPTextInput
              handleTextChange={txt => setGeneratedOtp(txt)}
              inputCount={6}
              inputCellLength={1}
              tintColor="#4984CA72"
              keyboardType="numeric"
              textInputStyle={{
                borderWidth: 0.5,
                borderRadius: 5,
                borderColor: '#C4C4C433',
                borderWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: 'rgba(196, 196, 196, 0.2)',
                width: 36,
                height: 36,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <TouchableOpacity
          style={styles.button}
          //   onPress={() => navigation.navigate('OTPScreen')}
        >
          <Text style={styles.btn_text}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{marginTop: 20, marginBottom: 30}}>
          <Text style={{color: '#FFFFFF', fontFamily: 'Inter-Bold'}}>
            Didn’t receive any code?{' '}
            <Text
              style={{
                color: '#FFAD14',
                fontSize: 13,
                fontFamily: 'Inter-Medium',
              }}>
              Resend Again
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: '#FFFFFF'}}>Request new code in 00:30s</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
  },
  inner_container: {
    width: '80%',
    marginTop: '30%',
  },
  top_container: {
    marginBottom: '20%',
  },
  button: {
    backgroundColor: '#FFAD14',
    width: '85%',
    borderRadius: 10,
    marginBottom: 10,
  },
  btn_text: {
    fontSize: 20,
    height: 47,
    color: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  heading_text: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    lineHeight: 29,
  },
  description_text: {
    fontSize: 14,
    lineHeight: 19,
    height: 47,
    color: '#FFFFFF',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: 'Inter-Light',
    marginTop: 25,
  },
  mid_container: {
    flexDirection: 'row',
    marginLeft: -2,
    alignItems: 'center',

    marginTop: -28,
  },
  bottom_container: {
    alignItems: 'center',
    width: '91%',
    marginTop: '14%',
  },
});

export default OTPScreen;
