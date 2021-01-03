import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');


const foot_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 15,
  },
  logo: {
    height: deviceSize.height / 4,
  },
  footname: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export {foot_item};
