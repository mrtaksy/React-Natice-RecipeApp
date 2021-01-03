import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {FootCategoriesCard} from '../components';
import {main} from '../styles/pages_styles';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

function FootCategories(props) {
  const [footCategoriesList, setFootCategoriesList] = useState([]);

  function fetchData() {
    axios
      .get(api_url+props.route.params.strCategory)
      .then((response) => setFootCategoriesList(response.data.meals));
      
  }

  useEffect(() => {
    fetchData();
  }, []);
 
  const renderJob = ({item}) => (
    <FootCategoriesCard
      foot={item}
      onSelect={() => props.navigation.navigate('Detail', {idMeal: item.idMeal})}
    />
  );

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <FlatList
          keyExtractor={(item) => item.idMeal}
          data={footCategoriesList}
          renderItem={renderJob}
        />
      </View>
    </SafeAreaView>
  );
}

export {FootCategories};