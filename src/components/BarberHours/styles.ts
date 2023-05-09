import styled from "styled-components/native";

type HoursItemProps = {
  backgroundColor: string;
};

type HoursTextProps = {
  color: string;
};

export const Container = styled.View``;

export const HoursButton = styled.TouchableOpacity`
  width: 123px;
`;

export const HoursItem = styled.View<HoursItemProps>`
  width: 40%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const HoursText = styled.Text<HoursTextProps>`
  font-family: Lexend_400Regular;
  color: ${(props) => props.color};
  font-size: 16px;
`;
