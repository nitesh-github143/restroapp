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

const {width, height} = Dimensions.get('window');
const Cart = () => {
  const foodDummyData = [{id: 1, name: 'Chowmin'}];

  const FoodUI = ({item}) => (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{}}
              source={require('../assets/images/cartfood.png')}
            />
          </View>
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 13,
                fontFamily: 'Inter-Medium',
              }}>
              Veg Hakka
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 13,
                fontFamily: 'Inter-Medium',
              }}>
              Noodles
            </Text>
            <Text
              style={{
                color: '#FFAD14',
                fontSize: 12,
                fontFamily: 'Inter-SemiBold',
              }}>
              ₹ 316
            </Text>
            <TouchableOpacity
              style={{
                paddingHorizontal: 14,
                paddingVertical: 5,
                backgroundColor: '#FFAD14',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 10,
                  fontFamily: 'Inter-Bold',
                }}>
                View in AR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFAD14',
              width: 26,
              height: 26,
              borderRadius: 2,
            }}>
            <Text style={{textAlign: 'center'}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#2E2E2E',
              marginHorizontal: 5,
              width: 26,
              height: 26,
              borderRadius: 2,
            }}>
            <Text style={{textAlign: 'center', color: '#FFF'}}>1</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFAD14',
              width: 26,
              height: 26,
              borderRadius: 2,
            }}>
            <Text style={{textAlign: 'center'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: width * 0.9,
          backgroundColor: '#60505080',
          marginVertical: 5,
          marginTop: 20,
        }}></View>
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
            Pizza House
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#FFAD14',
            backgroundColor: '#2E2E2E',
            borderRadius: 4,
            marginTop: 15,
          }}>
          <Image
            style={{
              marginHorizontal: 10,
            }}
            source={require('../assets/images/info.png')}
          />
          <Text
            style={{
              height: 39,
              textAlignVertical: 'center',
              fontSize: 12,
              color: '#FFFFFF',
              fontFamily: 'Inter-Medium',
            }}>
            You’re good to go!
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 1,
              width: width * 0.9,
              backgroundColor: '#60505080',
              marginVertical: 5,
              marginTop: 20,
            }}></View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={foodDummyData}
            renderItem={({item}) => <FoodUI item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btn_text}>Notify Restaurant</Text>
        </TouchableOpacity>
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

export default Cart;
