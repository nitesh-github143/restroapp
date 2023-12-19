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
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';

const Restaurants = () => {
  const topic = [
    {
      id: 1,
      name: 'Newest',
    },
    {
      id: 2,
      name: 'Treanding',
    },
    {
      id: 3,
      name: 'Newest',
    },
    {
      id: 4,
      name: 'Newest',
    },
  ];

  const TopicUI = ({item}) => (
    <View style={{backgroundColor: '#2E2E2E', height: 31, borderRadius: 2}}>
      <Text style={{color: '#fff'}}>Hello</Text>
    </View>
  );
  return (
    <View style={styles.main_container}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{}}
            source={require('../assets/images/whitebackarrow.png')}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Inter-Regular',
              color: '#FFF',
              marginLeft: 20,
            }}>
            Chinese Restaurants
          </Text>
        </View>
      </View>
      <View>
        <Text style={{}}>Hello</Text>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          data={Restaurants}
          renderItem={({item}) => <TopicUI item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    color: '#FFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FFAD14',
    width: '75%',
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: 'center',
  },
  btn_text: {
    fontSize: 20,
    height: 47,
    color: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Inter-SemiBold',
  },
});

export default Restaurants;
