
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';

import { DefaultNavigationProps } from '../../../types';
import styles from './styles';
import Button from '../../shared/Button';
import { IC_CB_LOGO, IC_WELCOME_LOGO } from '../../../utils/Icons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { getString } from '../../STRINGS';
// import { useThemeContext } from '../../providers/ThemeProvider';

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
      <SafeAreaView>
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
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: '#3ae1fe' }]}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: '#260868' }]}>
            <Text style={styles.buttonText}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.changeLangContainer}>
            <Text style={styles.changeLangText}>
              Change Language
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Container>
  );
}

export default Intro;
