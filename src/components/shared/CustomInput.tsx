import {
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import React from 'react';

interface Props {
  onChangeText?: (t: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  title?: string;
}

function CustomInput(props: Props): React.ReactElement {
  return (
    <View style={[props.style, { width: '100%' }]}>
      <Text style={{
        fontFamily: 'Avenir-Heavy',
        fontSize: 12,
        color: '#6a6a6a',
      }}>
        {props.title}
      </Text>
      <TextInput
        style={{
          color: 'black',
          fontSize: 16,
          fontFamily: 'Avenir-Heavy',
          borderBottomColor: '#707070',
          borderBottomWidth: 1,
          height: 50,
          padding: 10,
        }}
        onChangeText={props.onChangeText}
        underlineColorAndroid='transparent'
        autoCorrect={false}
        placeholder={props.placeholder}
        autoCapitalize='none'
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

CustomInput.defaultProps = {
  secureTextEntry: false,
};

export default CustomInput;
