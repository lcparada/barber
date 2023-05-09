import styled from "styled-components/native";

type IconProps = {
  color: string;
};

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  column-gap: 10px;
`;

export const Icon = styled.View<IconProps>`
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
  color: black;
`;
