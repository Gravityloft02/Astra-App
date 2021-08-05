import {ActivityIndicator, Modal, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../assets/theme/colors';

const CustomProgressBar = ({visible}) => (
  <Modal onRequestClose={() => null} visible={visible}>
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgcolor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{borderRadius: 10, backgroundColor: '#494949', padding: 25}}>
        <Text style={{fontSize: 20, fontWeight: '200', color: colors.white}}>
          Loading
        </Text>
        <ActivityIndicator size="large" color="#E2B66E" />
      </View>
    </View>
  </Modal>
);

export default CustomProgressBar;
