import { Fragment, useEffect, useState } from "react";

import moment from "moment";

import {
  ScheduleBackground,
  ScheduleModal,
  ScheduleModalButtonBack,
  ScheduleModalButtonFinished,
  ScheduleModalButtonFinishedText,
  ScheduleModalCalendar,
  ScheduleModalContainer,
  ScheduleModalHours,
  ScheduleModalInformationBarber,
  ScheduleModalInformationBarberImage,
  ScheduleModalInformationBarberName,
  ScheduleModalTypeService,
  ScheduleModalTypeServiceName,
  ScheduleModalTypeServicePrice,
  ScheduleServiceButton,
  ScheduleServiceButtonText,
  ServiceCard,
  ServiceInfo,
  ServiceInfoName,
  ServiceInfoPrice,
} from "./styles";

type ListServicesProps = {
  barberName: string;
  barberImage: string;
  nameService: string;
  priceService: string;
};

import { Feather } from "@expo/vector-icons";
import { Calendar } from "../Calendar";
import BarbersHours from "../BarberHours";
import { FireStoreService } from "../../services/firestore";
import { Alert } from "react-native";
import { addZeroToNumbersLessThanTen } from "../../helpers";

export default function ListServices(props: ListServicesProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const today = moment().subtract(new Date().getTimezoneOffset() / 60, "hours");

  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedDay, setSelectedDay] = useState<number>(today.date());
  const [selectedHour, setSelectedHour] = useState<string>("");

  async function sendData() {
    const userLogged = new FireStoreService().getUserLogged();
    const data = {
      barberName: props.barberName,
      barberImage: props.barberImage,
      nameService: props.nameService,
      hours: selectedHour,
      day: `${addZeroToNumbersLessThanTen(
        selectedDay
      )}/${addZeroToNumbersLessThanTen(selectedMonth + 1)}/${today.year()}`,
    };
    if (selectedHour !== "") {
      try {
        await new FireStoreService().addSchedule(userLogged as string, data);
        Alert.alert("Sucesso", "Agendamento realizado com sucesso!");
        setModalVisible(!modalVisible);
      } catch (e) {
        console.log(e);
      }
    } else {
      Alert.alert("ERRO", "Selecione um horário para agendar!");
    }
  }

  return (
    <Fragment>
      <ServiceCard>
        <ServiceInfo>
          <ServiceInfoName>{props.nameService}</ServiceInfoName>
          <ServiceInfoPrice>R$ {props.priceService}</ServiceInfoPrice>
        </ServiceInfo>
        <ScheduleServiceButton onPress={() => setModalVisible(!modalVisible)}>
          <ScheduleServiceButtonText>Agendar</ScheduleServiceButtonText>
        </ScheduleServiceButton>
      </ServiceCard>

      <ScheduleModal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
      >
        <ScheduleBackground>
          <ScheduleModalContainer>
            <ScheduleModalButtonBack
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="arrow-down" size={30} color="#6665ff" />
            </ScheduleModalButtonBack>

            <ScheduleModalInformationBarber>
              <ScheduleModalInformationBarberImage
                source={{ uri: props.barberImage }}
              />
              <ScheduleModalInformationBarberName>
                {props.barberName}
              </ScheduleModalInformationBarberName>
            </ScheduleModalInformationBarber>

            <ScheduleModalTypeService>
              <ScheduleModalTypeServiceName>
                {props.nameService}
              </ScheduleModalTypeServiceName>
              <ScheduleModalTypeServicePrice>
                {props.priceService}
              </ScheduleModalTypeServicePrice>
            </ScheduleModalTypeService>

            <ScheduleModalCalendar>
              <Calendar
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
              />
            </ScheduleModalCalendar>

            <ScheduleModalHours>
              <BarbersHours
                selectedHour={selectedHour}
                setSelectedHour={setSelectedHour}
                selectedDay={selectedDay}
              />
            </ScheduleModalHours>

            <ScheduleModalButtonFinished onPress={sendData}>
              <ScheduleModalButtonFinishedText>
                Finalizar agendamento
              </ScheduleModalButtonFinishedText>
            </ScheduleModalButtonFinished>
          </ScheduleModalContainer>
        </ScheduleBackground>
      </ScheduleModal>
    </Fragment>
  );
}
