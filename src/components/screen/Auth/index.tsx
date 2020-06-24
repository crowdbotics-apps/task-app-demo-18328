
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import styled from 'styled-components/native';

import { DefaultNavigationProps } from '../../../types';
import styles from './styles';
import CustomInput from '../../shared/CustomInput';
import NativeButton from '../../shared/NativeButton';
import { IC_CB_LOGO } from '../../../utils/Icons';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }): string => theme.background};
`;

interface Props {
  navigation: DefaultNavigationProps<'Auth'>;
  route: DefaultNavigationProps<'Auth'>;
}

const LoginRoute = (): JSX.Element => {
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F5F9' }}>
      <View style={[styles.inputContainer, styles.elementMargin]}>
        <CustomInput
          style={styles.elementMargin}
          onChangeText={(t: string) => {
            setEmailAddress(t);
          }}
          title='Email Address'
          placeholder='Tap to enter email address'
        />
        <CustomInput
          style={styles.elementMargin}
          onChangeText={(t: string) => {
            setPassword(t);
          }}
          title='Password'
          placeholder='Tap to enter password'
          secureTextEntry
        />
        <TouchableOpacity
          style={{ marginVertical: 10 }}
          onPress={() => {
          }}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.elementMargin}>
        <NativeButton
          onClick={() => {
          }}
          style={{
            backgroundColor: '#3AE1FE',
            marginVertical: 10,
          }}
          text='Log in'
        />
        <View style={styles.borderContainer} />
        <NativeButton
          onClick={() => {
          }}
          style={{
            backgroundColor: '#4065AF',
            marginVertical: 10,
          }}
          text='Log in with Facebook'
          facebook
        />
      </View>
    </View>
  );
};

const RegisterRoute = (): JSX.Element => {
  return (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
};

const initialLayout = { width: Dimensions.get('window').width };

function Auth(props: Props): React.ReactElement {
  console.log(props);
  const [index, setIndex] = React.useState(props.route.params.screenIndex);
  const [routes] = React.useState([
    { key: 'login', title: 'Login' },
    { key: 'register', title: 'Register' },
  ]);

  const renderScene = SceneMap({
    login: LoginRoute,
    register: RegisterRoute,
  });

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
          <Text style={styles.headerText}>T  A  S  K  M  A  N</Text>
        </View>
        <View style={styles.headerImgSection} />
      </View>
      
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#3ae1fe' }}
              style={{ backgroundColor: 'white' }}
              renderLabel={({ route, focused, color }) => (
                <Text
                  style={{
                    color: focused ? '#3AE1FE' : '#3B424F',
                    fontSize: 16,
                    fontFamily: 'Avenir-Heavy',
                  }}>
                  {route.title}
                </Text>)}
            />}
          onIndexChange={setIndex}
          initialLayout={initialLayout} />
      </View>
    </Container>
  );
}

export default Auth;
