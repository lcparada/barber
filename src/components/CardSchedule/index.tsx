import { FlatList, Alert, View } from "react-native";
import { FireStoreService } from "../../services/firestore";
import {
  Card,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
  CardType,
  NoSchedules,
  NoSchedulesText,
} from "./styles";

type Schedules = {
  barberImage: string;
  barberName: string;
  day: string;
  hours: string;
  nameService: string;
};

import { useEffect, useState } from "react";

export default function CardSchedule() {
  const [schedules, setSchedules] = useState<Schedules[]>([]);

  async function getSchedules() {
    const userLogged = new FireStoreService().getUserLogged();

    try {
      const informationsUsers = await new FireStoreService().getInformationUser(
        userLogged
      );
      setSchedules(informationsUsers.schedule);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteSchedule(data: Schedules) {
    const userLogged = new FireStoreService().getUserLogged();
    try {
      Alert.alert("Atenção", "Deseja realmente excluir esse agendamento?", [
        {
          text: "Sim",
          onPress: async () =>
            await new FireStoreService().removeSchedule(
              userLogged as string,
              data
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    } catch (e) {}
  }

  useEffect(() => {
    getSchedules();
  }, [schedules]);
  return (
    <View>
      {schedules.length !== 0 ? (
        <FlatList
          data={schedules}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Card
              style={{ elevation: 5 }}
              onLongPress={() => deleteSchedule(item)}
              delayLongPress={1000}
            >
              <CardImage source={{ uri: item.barberImage }} />
              <CardInfo>
                <CardTitle>{item.barberName}</CardTitle>
                <CardType>{item.nameService}</CardType>
                <CardDescription>
                  {item.day} às {item.hours}h
                </CardDescription>
              </CardInfo>
            </Card>
          )}
        />
      ) : (
        <NoSchedules>
          <NoSchedulesText>Voce não possui agendamentos!</NoSchedulesText>
        </NoSchedules>
      )}
    </View>
  );
}
