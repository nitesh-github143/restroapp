import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/Ionicons';
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
import HomeTopics from '../components/HomeTopics';

const {width, height} = Dimensions.get('window');
const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    // Handle the search logic here
    console.log('Search:', text);
    setSearchText(text);
  };

  const categoriesDummyData = [
    {
      id: 1,
      name: 'chineese',
      imagesrc: '../assets/images/userimg.png',
    },
    {
      id: 2,
      name: 'chineese',
      imagesrc: '../assets/images/userimg.png',
    },
    {
      id: 3,
      name: 'chineese',
      imagesrc: '../assets/images/userimg.png',
    },
  ];

  const foodDummyData = [
    {
      id: 1,
      name: 'Tandoori Delights',
      ratings: 4.3,
      reviewCount: 24,
      status: 'open',
      closeTime: 'Closes at 10 pm',
      location: 'Malviya Nagar, Jaipur',
    },
    {
      id: 2,
      name: 'Tandoori Delights',
      ratings: 4.3,
      reviewCount: 24,
      status: 'open',
      closeTime: 'Closes at 10 pm',
      location: 'Malviya Nagar, Jaipur',
    },
  ];

  const CategoryUI = ({item}) => (
    <View>
      <Image
        source={require('../assets/images/userimg.png')}
        style={styles.categorie_img}
      />
      <Text style={{color: '#EDEDED', textAlign: 'center'}}>{item.name}</Text>
    </View>
  );

  const FoodUI = ({item}) => (
    <View style={{width: 246, height: 224, marginRight: 20, marginTop: 20}}>
      <View>
        <Image
          source={require('../assets/images/food.png')}
          style={{width: 246, height: 103}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#2E2E2E',
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Inter-SemiBold',
              color: '#FFFFFF',
              lineHeight: 15,
            }}>
            Tandoori
          </Text>
          {/* <Icon name="male" size={14} color="#FFD700" /> */}
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              fontSize: 10,
              color: '#FFFFFF',
              lineHeight: 15,
              backgroundColor: '#1D1D1D',
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 4,
            }}>
            <Image source={require('../assets/images/star.png')} />
            {'  '}
            4.3(23)
          </Text>
        </View>
        <View style={{flexDirection: 'row', height: 19}}>
          <Text
            style={{
              color: '#FFAD14',
              fontSize: 10,
              fontFamily: 'Inter-Regular',
            }}>
            {item.status}
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 10,
              fontFamily: 'Inter-Regular',
            }}>
            {' '}
            {item.closeTime}{' '}
          </Text>
        </View>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: 10,
            fontFamily: 'Inter-Regular',
            lineHeight: 12,
          }}>
          <View>
            <Image
              source={require('../assets/images/location.png')}
              style={{paddingRight: 5}}
            />
          </View>
          {'  '}
          {item.location}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFAD14',
            width: '50%',
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              height: 34,
              color: '#000000',
              fontFamily: 'Inter-SemiBold',
              fontSize: 10,
            }}>
            AR Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#151515',
            width: '50%',
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              textAlignVertical: 'center',
              height: 34,
              color: '#FFFFFF',
              fontFamily: 'Inter-SemiBold',
              fontSize: 10,
            }}>
            Direction
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <View>
          <Image
            source={require('../assets/images/userimg.png')}
            style={{height: 47, width: 47}}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <View style={styles.categories_container}>
        <View>
          <HomeTopics title="Categories" />
        </View>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          data={categoriesDummyData}
          renderItem={({item}) => <CategoryUI item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.categories_container}>
        <View>
          <HomeTopics title="Near by Restaurants" />
        </View>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          data={foodDummyData}
          renderItem={({item}) => <FoodUI item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.categories_container}>
        <View>
          <HomeTopics title="Trending Restaurants" />
        </View>
        <FlatList
          horizontal={true}
          showsVerticalScrollIndicator={false}
          data={foodDummyData}
          renderItem={({item}) => <FoodUI item={item} />}
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
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#3C3C3C',
    borderRadius: 20,
    height: 35,
    padding: 10,
    width: width * 0.75,
  },
  categories_container: {
    marginHorizontal: 14,
    marginTop: '10%',
  },
  categorie_img: {
    width: 69,
    height: 69,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
  },
});

export default Home;
