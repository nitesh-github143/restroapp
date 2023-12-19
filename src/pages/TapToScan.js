import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OTPTextInput from 'react-native-otp-textinput';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const TapToScan = () => {
  return (
    <View style={styles.main_container}>
      <View>
        <Image style={{}} source={require('../assets/images/backarrow.png')} />
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        <Image
          style={{}}
          source={require('../assets/images/dummyuserimage.png')}
        />
        <Text style={styles.txt}>Subham</Text>
        <Text style={styles.txt}>+91 8654322324</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        {/* <Text>Tap To Scan</Text> */}
        <View style={{shadowColor: '#000'}}>
          <Image
            style={{height: 300}}
            resizeMode="contain"
            source={require('../assets/images/scan.png')}
          />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '80%',
            marginTop: 60,
          }}>
          <Text style={styles.txt}>Setting</Text>
          <Image
            style={{height: 10}}
            resizeMode="contain"
            source={require('../assets/images/Vector.png')}
          />
        </View>
        <View
          style={{
            width: 155,
            height: 1,
            backgroundColor: '#000000',
            marginVertical: 8,
            marginLeft: '10%',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '80%',
          }}>
          <Text style={styles.txt}>Help and Support</Text>
          <Image
            style={{height: 10}}
            resizeMode="contain"
            source={require('../assets/images/Vector.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#FFAD14',
    color: '#FFF',
    padding: 20,
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginTop: 5,
  },
});

export default TapToScan;
