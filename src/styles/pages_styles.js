import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const foot_detail = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceSize.height / 3,

    borderColor: '#e0e0e0',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export {main, foot_detail};
