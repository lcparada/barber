import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  width: 370px;
  height: 130px;
  border-radius: 10px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const CardInfo = styled.View`
  row-gap: 5px;
`;

export const CardImage = styled.Image`
  margin-left: 30px;
  width: 90px;
  height: 90px;
  border-radius: 5px;
  background-color: #e2e2e2;
`;

export const CardTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  color: #333333;
`;

export const CardType = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #333333;
`;

export const CardDescription = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #333333;
`;

export const NoSchedules = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoSchedulesText = styled.Text`
  font-family: Lexend_400Regular;
  color: #99a0a8;
  font-size: 16px;
`;
