import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 120px;
  margin-left: 30px;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 60px;
  border-width: 1px;
  border-color: #6665ff;
`;

export const ChangePhotoText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  color: #6665ff;
`;

export const Body = styled.View`
  align-items: center;
  margin-top: 40px;
  row-gap: 20px;
`;

export const TextOnEmail = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  color: black;
`;

export const Email = styled.View`
  width: 330px;
  height: 60px;
  border-radius: 10px;
  background-color: #6665ff;
  justify-content: center;
  padding-left: 30px;
`;

export const EmailText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: white;
`;

export const FindCep = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextUnderCep = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: black;
`;

export const ButtonUnderCep = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ButtonTextUnderCep = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #6665ff;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Button = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #6665ff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Lexend_700Bold;
  color: white;
`;
