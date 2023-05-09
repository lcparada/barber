import styled from "styled-components/native";

type DaysItemProps = {
  background: string;
};

type DaysNameProps = {
  color: string;
};

type DaysProps = {
  color: string;
};

export const Container = styled.View`
  flex: 1;
`;

export const ContainerMonth = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-top: 10px;
`;

export const ButtonPrev = styled.TouchableOpacity``;

export const ButtonBack = styled.TouchableOpacity``;

export const MonthSelected = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: white;
`;

export const ContainerDays = styled.View`
  margin-top: 5px;
`;

export const DaysButton = styled.TouchableOpacity`
  width: 53px;
  height: 60px;
  justify-content: center;
`;

export const DaysName = styled.Text<DaysNameProps>`
  font-family: Lexend_400Regular;
  font-size: 12px;
  color: ${(props) => props.color};
  margin-bottom: 3px;
`;

export const DaysItem = styled.View<DaysItemProps>`
  width: 60%;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => props.background};
`;

export const Days = styled.Text<DaysProps>`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: ${(props) => props.color};
`;
