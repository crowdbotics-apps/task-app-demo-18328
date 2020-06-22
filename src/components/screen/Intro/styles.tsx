import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 20,
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
    paddingHorizontal: 20,
  },
  slideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
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
  buttonContainer: {
    borderRadius: 10,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Avenir-Medium',
    fontSize: 17,
    color: 'white',
  },
  changeLangContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7,
  },
  changeLangText: {
    fontFamily: 'Avenir-Light',
    fontSize: 14,
    color: 'black',
  },
});

export default styles;
