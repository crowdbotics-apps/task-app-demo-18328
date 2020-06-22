import React from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import Button from '../shared/Button';
import { DefaultNavigationProps } from '../../types';
import styles from './Intro/styles';

const Container = styled.View`
  flex: 1;
  background-color: ${(props): string => props.theme.background};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: DefaultNavigationProps<'Terms'>;
}

// eslint-disable-next-line max-len
const contentStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi,dolor sit amet, ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi,dolor sit amet, ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi, venenatis eget ipsum sed, facilisis sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus mi,';

function Terms(props: Props): React.ReactElement {
  return (
    <KeyboardAwareScrollView>
      <Container>
        <Text style={{ fontFamily: 'Avenir-Black', fontSize: 30, marginTop: 50, marginBottom: 25 }}>
          Terms and Conditions
        </Text>
        <Text>
          {contentStr}
        </Text>
        <Button
          style={{ marginVertical: 25 }}
          onClick={(): void => {
            props.navigation.goBack();
          }}
          text="Go Back"
        />
      </Container>
    </KeyboardAwareScrollView>
  );
}

export default Terms;
