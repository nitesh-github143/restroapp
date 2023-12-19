import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';

const InputBox = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  imageSource,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {borderColor: isFocused ? '#FFAD14' : '#3C3C3C'},
      ]}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingLeft: 15,
        }}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        maxLength={10}
        defaultValue={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  input: {
    height: 50,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  image: {},
  focusedInput: {
    // borderColor: '#', // Replace 'customColor' with your desired custom color
  },
});

export default InputBox;
