import styled from "styled-components/native";

export const CardBarber = styled.View`
  width: 330px;
  height: 140px;
  border-radius: 15px;
  background-color: #6665ff;
  align-self: center;
  margin-top: 20px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  column-gap: 25px;
`;

export const CardBarberImage = styled.Image`
  width: 90px;
  height: 90px;
  background-color: white;
  border-color: white;
  border-width: 1px;
  border-radius: 15px;
`;

export const CardBarberInfo = styled.View`
  flex-direction: column;
`;

export const CardBarberName = styled.Text`
  font-size: 14px;
  font-family: Lexend_700Bold;
  color: white;
  max-width: 200px;
  margin-bottom: 5px;
`;

export const Rate = styled.View`
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
`;

export const NumberRate = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: white;
`;

export const CardBarberProfileButton = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  border-width: 1px;
  border-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const CardBarberProfileText = styled.Text`
  font-size: Lexend_400Regular;
  font-size: 12px;
  color: white;
  align-self: center;
`;

export const ModalContainer = styled.View`
  flex: 0.4;
`;

export const ModalBackIcon = styled.TouchableOpacity`
  margin-left: 20px;
  margin-top: 20px;
`;

export const ModalProfileBarber = styled.View`
  flex: 1;
  background-color: #6665ff;
  border-top-left-radius: 70px;
`;

export const ModalProfileBarberImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  border-width: 1px;
  border-color: white;
  position: absolute;
  left: 40px;
  bottom: 560px;
`;

export const ModalProfileBarberFavoriteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: #6665ff;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 330px;
  bottom: 600px;
`;

export const ModalProfileBarberInformations = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 18px;
  color: white;
  margin-top: 20px;
  align-self: center;
  margin-left: 90px;
  text-align: center;
`;

export const RateModal = styled.View`
  justify-content: center;
  padding-left: 80px;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
  margin-top: 10px;
`;

export const NumberRateModal = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: white;
`;

export const BodyModal = styled.View`
  margin-left: 40px;
  margin-top: 30px;
  height: 320px;
`;

export const AssessmentModal = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const FlatListAssessmentModal = styled.View`
  width: 290px;
  flex-direction: row;
  align-items: center;
`;

export const BodyModalTitle = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 20px;
  color: white;
`;
