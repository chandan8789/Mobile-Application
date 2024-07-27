import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {hp} from '../assets/commonCSS/GlobalCss';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose the icon family you prefer
import CommonButton from './CommonButton';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Full name" />
      <TextInput style={styles.input} placeholder="Email Id" />
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        keyboardType="numberic"
      />
      <TextInput style={styles.inputs} placeholder="Add Comment" multiline />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputss}
          placeholder="Browse"
          value={text}
          onChangeText={setText}
          multiline
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="camera" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <CommonButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
  },
  input: {
    height: hp(6),
    borderColor: 'gray',
    borderWidth: hp(0.1),
    paddingHorizontal: hp(1.5),
    marginTop: hp(2),
    borderRadius: hp(0.5),
    backgroundColor: 'white',
    elevation: 5,
  },
  inputs: {
    height: hp(25),
    borderColor: 'gray',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    borderWidth: hp(0.1),
    paddingHorizontal: hp(1.5),
    marginTop: hp(2),
    borderRadius: hp(0.5),
    backgroundColor: 'white',
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp(0.1),
    paddingHorizontal: hp(1.5),
    marginTop: hp(2),
    borderRadius: hp(0.5),
    backgroundColor: 'white',
    elevation: 5,
  },
  inputss: {
    flex: 1,

    textAlignVertical: 'top',
  },
  iconContainer: {
    padding: 5,
  },
});

export default App;
