import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-family: Lexend_700Bold;
  color: #333333;
  margin-bottom: 50px;
`;

export const Header = styled.View`
  margin-top: 80px;
  margin-left: 30px;
  margin-right: 30px;
  align-items: center;
`;

export const HeaderAvatar = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Img = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 2px;
  border-color: #6665ff;
`;

export const HeaderName = styled.Text`
  font-size: 18px;
  font-family: Lexend_700Bold;
  margin-top: 20px;
  color: #6665ff;
`;

export const HeaderEmail = styled.Text`
  font-size: 14px;
  font-family: Lexend_400Regular;
  color: #b8b8c4;
`;

export const Buttons = styled.View`
  margin-top: 30px;
  margin-left: 30px;
  row-gap: 20px;
  margin-right: 110px;
`;
