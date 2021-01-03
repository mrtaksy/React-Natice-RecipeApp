/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';

import React, {useEffect, useState} from 'react';

import { View, Text, ImageBackground,ScrollView} from 'react-native';

import {foot_detail} from '../styles/pages_styles';



function FootDetail({route}) {
  const {idMeal} = route.params;
  const [footDetail, setFootDetail] = useState({});

  async function fetchFootData() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
    );

    setFootDetail(response.data.meals[0]);

  }

  useEffect(() => {
    fetchFootData();
  }, []);

  return (
    <ScrollView style={foot_detail.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: footDetail.strMealThumb}}
          style={foot_detail.image}>
        </ImageBackground>
        <View style={foot_detail.detail}>
            <Text style={foot_detail.title}>{footDetail.strMeal}</Text>
          </View>
       <Text>{footDetail.strInstructions}</Text>
  
     </ScrollView>
  );
}

export {FootDetail};
