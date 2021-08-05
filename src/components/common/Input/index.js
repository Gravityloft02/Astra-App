import React from 'react';
import {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  label,
  icon,
  onChangeText,
  style,
  value,
  error,
  placeholder,
  keyboardType,
  maxLength,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getBorderColor = () => {
    if (focused) {
      return colors.focusgolden;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.golden;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {borderColor: getBorderColor()}, styles]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={colors.golden}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          maxLength={maxLength}

          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
