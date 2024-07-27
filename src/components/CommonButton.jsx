import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp} from '../assets/commonCSS/GlobalCss';
import FontSize from '../assets/commonCSS/FontSize';

const CommonButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Submit</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    alignContent: 'center',
    backgroundColor: '#ff00ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    marginTop: hp(15),
    elevation: 1,
    borderRadius: hp(0.5),
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: FontSize.fs20,
    fontWeight: 'bold',
  },
});
