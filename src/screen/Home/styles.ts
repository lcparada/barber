import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 21px;
  color: #333333;
`;

export const LocationContainer = styled.View`
  margin-top: 50px;
`;

export const InputLocation = styled.TextInput`
  width: 330px;
  height: 60px;
  border-radius: 30px;
  align-self: center;
  background-color: #6665ff;
  font-family: Lexend_400Regular;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
`;

export const IconLocation = styled.TouchableOpacity`
  position: absolute;
  right: 60px;
  top: 18px;
`;

export const Body = styled.View`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
