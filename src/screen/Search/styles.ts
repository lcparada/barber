import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 90px;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.TextInput`
  width: 330px;
  height: 60px;
  background-color: #6665ff;
  border-radius: 30px;
  font-family: Lexend_400Regular;
  font-size: 13px;
  padding-left: 40px;
  padding-right: 60px;
  color: #fff;
`;

export const Icon = styled.View`
  position: absolute;
  right: 70px;
`;

export const TextResult = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 24px;
  color: #333333;
  margin-top: 50px;
  margin-left: 30px;
`;

export const NoInformation = styled.View`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
  justify-content: center;
`;

export const NoInformationText = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: #99a0a8;
  text-align: center;
`;

export const Body = styled.View`
  margin-top: 50px;
`;
