import React from 'react';

import {View, Text, Image, Pressable} from 'react-native';

import {foot_item} from '../styles/components_styles';

const FootItem = ({foot, onSelect}) => {
  return (
   
      <Pressable style={foot_item.container} onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: foot.strCategoryThumb}}
        style={foot_item.logo}
      />
        <View style={foot_item.footer}>
          <Text style={foot_item.footname}>{foot.strCategory}</Text>
        </View>
        </Pressable>
  );
};
export {FootItem};
