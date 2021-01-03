import React from 'react';

import {View, Text, Image, Pressable} from 'react-native';

import {foot_item} from '../styles/components_styles';

const FootCategoriesCard = ({foot, onSelect}) => {
  return (
   
      <Pressable style={foot_item.container} onPress={onSelect}>
      <Image
        resizeMode="contain"
        source={{uri: foot.strMealThumb}}
        style={foot_item.logo}
      />
        <View style={foot_item.footer}>
          <Text style={foot_item.footname}>{foot.strMeal}</Text>
        </View>
        </Pressable>
  );
};
export {FootCategoriesCard};
