import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

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
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    textAlign: 'center',
    color: '#6a6a6a',
  },
  body: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },
  slideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
  },
  introImg: {
    marginBottom: 30,
  },
  introTitleSection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  introTitle: {
    fontSize: 16,
    color: '#505050',
  },
  introText: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    color: '#505050',
    textAlign: 'center',
    marginVertical: 10,
  },
  swiperDot: {
    backgroundColor: '#dedede',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  swiperActiveDot: {
    backgroundColor: '#260868',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  changeLangContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 7 + getBottomSpace(),
  },
  changeLangText: {
    fontFamily: 'Avenir-Light',
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
