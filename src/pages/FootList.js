import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {FootItem} from '../components';
import {main} from '../styles/pages_styles';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function FootList(props) {
  const [footList, setFootList] = useState([]);

  function fetchData() {
    axios
      .get(api_url)
      .then((response) => setFootList(response.data.categories));
      
  }

  useEffect(() => {
    fetchData();
  }, []);
 
  const renderJob = ({item}) => (
    <FootItem
      foot={item}
      onSelect={() => props.navigation.navigate('Kategori', {strCategory: item.strCategory})}
    />
  );

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <FlatList
          keyExtractor={(item) => item.idCategory}
          data={footList}
          renderItem={renderJob}
        />
      </View>
    </SafeAreaView>
  );
}

export {FootList};