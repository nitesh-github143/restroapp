import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import InputBox from '../components/InputBox';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.main_container}>
      <View style={styles.inner_container}>
        <View style={styles.top_container}>
          <Text style={styles.heading_text}>Get Started</Text>
          <Text style={styles.description_text}>
            Sign in to access your account
          </Text>
        </View>
        <InputBox
          placeholder="Enter Your Name   "
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
          imageSource={require('../assets/images/user.png')}
        />
        <InputBox
          placeholder="Enter Your Email   "
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
          imageSource={require('../assets/images/mail.png')}
        />
        <InputBox
          placeholder="Enter Phone Number   "
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
          imageSource={require('../assets/images/smartphone.png')}
        />
        <InputBox
          placeholder="Enter Password   "
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
          imageSource={require('../assets/images/lock.png')}
        />
        <View style={styles.mid_container}>
          <CheckBox
            tintColors={{true: '#FFF', false: '#FFF'}}
            style={{color: '#FFF'}}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              fontFamily: 'Inter-Regular',
              //   lineHeight: 14,
            }}>
            By checking the box you agree to our
          </Text>
          <Text
            style={{
              color: '#FFAD14',
              fontSize: 12,
              fontFamily: 'Inter-Regular',
              //   lineHeight: 14,
            }}>
            {' '}
            Terms{' '}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              fontFamily: 'Inter-Regular',
              //   lineHeight: 14,
            }}>
            and
          </Text>
          <Text
            style={{
              color: '#FFAD14',
              marginLeft: 32,
              marginTop: -10,
            }}>
            Conditions.
          </Text>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btn_text}>Next &#x003E;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#FFFFFF'}}>
            Already a member?{'  '}
            <Text
              style={{
                color: '#FFAD14',
                fontSize: 13,
                fontFamily: 'Inter-Medium',
              }}>
              Log In
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D1D1D',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner_container: {
    width: '80%',
    marginTop: '25%',
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
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    lineHeight: 29,
    paddingTop: 20,
  },
  description_text: {
    fontSize: 14,
    lineHeight: 16,
    height: 47,
    color: '#FFFFFF',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontFamily: 'Inter-Light',
    marginTop: -14,
    marginLeft: 5,
  },
  input_container: {
    marginTop: 15,
    justifyContent: 'center',
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3C3C3C',
    height: 50,
    paddingLeft: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  mid_container: {
    // marginLeft: 10,
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottom_container: {
    alignItems: 'center',
    width: '100%',
    marginBottom: '14%',
  },
});
