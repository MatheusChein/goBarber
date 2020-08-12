import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 40px 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 88px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackToSignInText = styled.Text`
  color: #fff;
  margin-left: 8px;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;
