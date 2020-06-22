import {
  ActivityIndicator,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.View`
  background-color: ${({ theme }): string => theme.btnPrimary};
  border-radius: 20px;
  justify-content: center;
`;

const StyledButtonDisabled = styled(StyledButton)`
  background-color: ${({ theme }): string => theme.btnDisabled};
  border-color: ${({ theme }): string => theme.btnDisabled};
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: rgb(0, 0, 0);
  padding-horizontal: 80px;
  padding-vertical: 10px;
  font-family: ${({ theme }): string => theme.fontFamily};
`;

const StyledTextDisabled = styled(StyledText)`
  color: ${({ theme }): string => theme.textDisabled};
`;

const StyledImage = styled.Image`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
`;

interface Props {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: ImageSourcePropType;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function Button(props: Props): React.ReactElement {
  if (props.isDisabled) {
    return (
      <StyledButtonDisabled style={[props.disabledStyle, props.style]}>
        <StyledTextDisabled style={props.textStyle}>
          {props.text}
        </StyledTextDisabled>
      </StyledButtonDisabled>
    );
  }
  if (props.isLoading) {
    return (
      <StyledButton style={props.style}>
        <ActivityIndicator size="small" color={props.indicatorColor} />
      </StyledButton>
    );
  }
  return (
    <TouchableOpacity
      testID={props.testID}
      activeOpacity={props.activeOpacity}
      onPress={props.onClick}
    >
      <StyledButton style={props.style}>
        {props.imgLeftSrc ? (
          <StyledImage style={props.imgLeftStyle} source={props.imgLeftSrc} />
        ) : null}
        <StyledText style={props.textStyle}>{props.text}</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  indicatorColor: 'white',
  activeOpacity: 0.5,
};

export default Button;
