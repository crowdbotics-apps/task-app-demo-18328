import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 20 + getStatusBarHeight(),
    marginBottom: 20,
  },
  headerImgSection: {
    flex: 1,
  },
  headerImg: {
    marginLeft: 10,
  },
  headerText: {
    fontFamily: 'Montserrat-Light',
    fontSize: 20,
    textAlign: 'center',
    color: '#505050',
  },
  elementMargin: {
    margin: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 13,
    fontFamily: 'Avenir-BookOblique',
    color: '#3AE1FE',
  },
  borderContainer: {
    width: '100%',
    height: 1,
    marginVertical: 10,
    backgroundColor: '#707070',
  },
});

export default styles;
