import {
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.View`
  background-color: ${({ theme }): string => theme.btnPrimary};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledText = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 17px;
  color: white;
  padding-vertical: 12px;
`;

interface Props {
  onClick?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  text?: string;
  facebook?: boolean;
}

function NativeButton(props: Props): React.ReactElement {
  return (
    <TouchableOpacity
      onPress={props.onClick}
    >
      <StyledButton style={props.style}>
        {props.facebook && (
          <FontAwesomeIcon name="facebook" color="white" size={20} style={{ marginRight: 15 }} />
        )}
        <StyledText style={props.textStyle}>{props.text}</StyledText>
      </StyledButton>
    </TouchableOpacity>
  );
}

NativeButton.defaultProps = {
  facebook: false,
};

export default NativeButton;
