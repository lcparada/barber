import styled from "styled-components/native";

export const ServiceCard = styled.View`
  margin-right: 30px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const ServiceInfo = styled.View`
  flex: 1;
`;

export const ServiceInfoName = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
  margin-right: 10px;
`;

export const ServiceInfoPrice = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 14px;
  color: #fff;
`;

export const ScheduleServiceButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 120px;
  height: 35px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ScheduleServiceButtonText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 15px;
  color: #6665ff;
  text-align: center;
`;

export const ScheduleModal = styled.Modal``;

export const ScheduleBackground = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
`;

export const ScheduleModalContainer = styled.View`
  height: 700px;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  top: 200px;
  align-items: center;
  justify-content: center;
`;

export const ScheduleModalButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ScheduleModalInformationBarber = styled.View`
  width: 370px;
  height: 90px;
  border-radius: 15px;
  background-color: #6665ff;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  column-gap: 15px;
`;

export const ScheduleModalInformationBarberImage = styled.Image`
  width: 70px;
  height: 70px;
  background-color: #d8d8d8;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #fff;
`;

export const ScheduleModalInformationBarberName = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 18px;
  color: white;
`;

export const ScheduleModalTypeService = styled.View`
  width: 370px;
  height: 100px;
  border-radius: 15px;
  background-color: #6665ff;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  justify-content: space-between;
`;

export const ScheduleModalTypeServicePrice = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: white;
`;

export const ScheduleModalTypeServiceName = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: white;
`;

export const ScheduleModalCalendar = styled.View`
  margin-top: 20px;
  width: 370px;
  margin-bottom: 20px;
  height: 120px;
  background-color: #6665ff;
  border-radius: 20px;
  align-items: center;
`;

export const ScheduleModalHours = styled.View`
  width: 370px;
  height: 70px;
  background-color: #6665ff;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const CalendarModal = styled.View`
  width: 100px;
  margin-top: 10px;
`;

export const ScheduleModalButtonFinished = styled.TouchableOpacity`
  width: 370px;
  height: 60px;
  background-color: #6665ff;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ScheduleModalButtonFinishedText = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
  color: #fff;
`;
