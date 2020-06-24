
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

import { DefaultNavigationProps } from '../../../types';
import styles from './styles';
import NativeButton from '../../shared/NativeButton';
import { IC_CB_LOGO, IC_WELCOME_LOGO } from '../../../utils/Icons';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

interface Props {
  navigation: DefaultNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let swiper: any;

  const renderPage = (): JSX.Element => {
    return (
      <View style={styles.slideView}>
        <Image
          style={styles.introImg}
          resizeMode="contain"
          source={IC_WELCOME_LOGO} />
        <View style={styles.introTitleSection}>
          <Text style={[styles.introTitle, { fontFamily: 'Avenir-Book' }]}>
            Welcome to{' '}
          </Text>
          <Text style={[styles.introTitle, { fontFamily: 'Avenir-Heavy' }]}>
            Crowdbotics TaskMan
          </Text>
        </View>
        <Text style={styles.introText}>
          Lorem ipsum dolor sit amet, consectetur{'\n'}
          adipiscing elit, sed do eiusmod tempor{'\n'}
          incididunt ut labore et dolore magna aliqua
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <View style={styles.headerContainer}>
        <View style={styles.headerImgSection}>
          <Image
            style={styles.headerImg}
            resizeMode="contain"
            source={IC_CB_LOGO} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.headerText}>Welcome</Text>
        </View>
        <View style={styles.headerImgSection} />
      </View>
      <View style={styles.body}>
        <Swiper
          ref={ref => (swiper = ref)}
          horizontal
          loop={false}
          containerStyle={{ marginVertical: 30 }}
          activeDotColor='#260868'
          dotColor='#dedede'>
          {renderPage()}
          {renderPage()}
          {renderPage()}
          {renderPage()}
        </Swiper>
        <View style={{
          paddingHorizontal: 20,
        }}>
          <NativeButton
            onClick={() => {
              props.navigation.navigate('Auth', { screenIndex: 0 });
            }}
            style={{
              backgroundColor: '#3AE1FE',
              marginVertical: 10,
            }}
            text='Log in'
          />
          <NativeButton
            onClick={() => {
              props.navigation.navigate('Auth', { screenIndex: 1 });
            }}
            style={{
              backgroundColor: '#260868',
              marginVertical: 10,
            }}
            text='Sign Up'
          />
          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.changeLangContainer}>
            <Text style={styles.changeLangText}>
              Change Language
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export default Intro;
