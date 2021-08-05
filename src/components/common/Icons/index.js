import React from 'react';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FAIIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const getIconFont = type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;

    case 'materialIcon':
      return MaterialIcon;

    case 'ionIcons':
      return Ionicons;

    case 'simpleLineIcon':
      return SimpleLineIcons;

    case 'AntDesign':
      return AntDesign;

    case 'EvilIcons':
      return EvilIcons;

    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;

    case 'feather':
      return Feather;

      case 'fontisto':
        return Fontisto;

    default:
      return FAIIcon;
  }
};

const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type);

  return <FontIcon {...props} />;
};

export default Icon;
