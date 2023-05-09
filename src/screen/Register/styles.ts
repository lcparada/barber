import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const ContainerInput = styled.View`
  margin-top: 30px;
  row-gap: 23px;
`;

export const DialIcon = styled.TouchableOpacity`
  position: absolute;
  right: 50px;
  top: 135px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #6665ff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 50px;
`;

export const TextButtonRegister = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  color: white;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
  column-gap: 5px;
`;

export const TextAlreadyAccount = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
`;

export const ButtonBackLogin = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TextButtonBackLogin = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #6665ff;
`;
