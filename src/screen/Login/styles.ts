import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 220px;
  height: 220px;
  margin-bottom: 80px;
  align-self: center;
`;

export const ContainerInput = styled.View`
  row-gap: 22px;
`;

export const DialIcon = styled.TouchableOpacity`
  position: absolute;
  top: 72px;
  right: 50px;
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #6665ff;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ButtonLoginText = styled.Text`
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

export const TextRegister = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TextButtonRegister = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 14px;
  color: #6665ff;
`;
