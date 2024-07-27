import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import FontSize from '../assets/commonCSS/FontSize';
import {hp} from '../assets/commonCSS/GlobalCss';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Support</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: hp(2),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: hp(1),
  },
  headerText: {
    fontSize: FontSize.fs25,
    color: '#ff00ff',
    fontWeight: 'bold',
  },
});
