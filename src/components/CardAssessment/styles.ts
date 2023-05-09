import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const CardAssessmentContainer = styled.View`
  width: 290px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 10px;
`;

export const HeaderTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #6665ff;
`;

export const Comment = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 13px;
  color: #6665ff;
`;
