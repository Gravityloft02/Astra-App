import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import AppStatusBar from '../common/StatusBar';
import styles from './styles';
import colors from '../../assets/theme/colors';
import Message from '../common/Message';
import Icon from '../common/Icons';

const LoginComponent = ({error, form, loading, onChange, onSubmit}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <AppStatusBar
          backgroundColor={colors.bgcolor}
          barStyle="light-content"
        />
        <ImageBackground
          source={require('../../assets/images/loginbg.png')}
          style={styles.backgroundImage}>
          <View style={styles.centerInBackground}>
            <Image
              height={100}
              width={100}
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />

            <Image
              height={100}
              width={100}
              source={require('../../assets/images/name.png')}
              style={styles.nameImage}
            />

            <Text style={styles.title}>Parent Connect</Text>

            {error && !error.error && (
              <View style={styles.errorStyle}>
                <Message onDismiss={() => {}} primary message={error.Message} />
              </View>
            )}

            {error?.error && (
              <Message
                Message
                style={styles.errorStyle}
                primary
                onDismiss
                message={error?.error}
              />
            )}

            <Input
              style={{width: '50%'}}
              icon={
                <Icon
                  type="feather"
                  size={20}
                  color={colors.focusgolden}
                  name="hash"></Icon>
              }
              placeholder="Phone Number"
              keyboardType="numeric"
              value={form.Phone || null}
              onChangeText={value => {
                onChange({name: 'Phone', value});
              }}
              maxLength={10}
              iconPosition="left"
            />

            <Input
              // label="Password"
              icon={
                <Icon size={20} color={colors.focusgolden} name="locked"></Icon>
              }
              keyboardType="default"
              placeholder="Password"
              onChangeText={value => {
                onChange({name: 'Password', value});
              }}
              secureTextEntry={isSecureEntry}
              iconPosition="left"
            />

            <TouchableOpacity>
              <Text style={styles.subTitle}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              primary
              title="Login"
              onPress={onSubmit}
              loading={loading}
              disabled={loading}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default LoginComponent;
