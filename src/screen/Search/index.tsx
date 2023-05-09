import {
  Container,
  SearchBar,
  Header,
  Icon,
  TextResult,
  NoInformation,
  NoInformationText,
  Body,
} from "./styles";

import { Pressable, Keyboard } from "react-native";

import { useState, useEffect } from "react";

import { Feather } from "@expo/vector-icons";

import { barbers } from "../../data/barbers";
import { FlatList } from "react-native-gesture-handler";
import ListBarbers from "../../components/ListBarbers";

type Barbers = {
  id: number;
  name: string;
  avatar: string;
};

export default function Search() {
  const [information, setInformation] = useState<string>("");
  const [barbersFiltered, setBarbersFiltered] = useState<Barbers[]>([]);

  useEffect(() => {
    setBarbersFiltered(
      barbers.filter((item) =>
        item.name.toLowerCase().includes(information.toLowerCase())
      )
    );
  }, [information]);

  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <Header>
          <SearchBar
            placeholder="Quem você está procurando?"
            placeholderTextColor="white"
            value={information}
            onChangeText={setInformation}
          ></SearchBar>
          <Icon>
            <Feather name="search" size={24} color="white" />
          </Icon>
        </Header>

        <TextResult>Resultados</TextResult>
        {information === "" ? (
          <NoInformation>
            <NoInformationText>
              Digite algo para que possamos achar o seu barbeiro!😊
            </NoInformationText>
          </NoInformation>
        ) : barbersFiltered.length === 0 ? (
          <NoInformation>
            <NoInformationText>
              Não achamos nenhum barbeiro com esse nome!😢
            </NoInformationText>
          </NoInformation>
        ) : (
          <Body>
            <FlatList
              data={barbersFiltered}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListBarbers
                  barberName={item.name}
                  barberImage={item.avatar}
                  barberId={item.id.toString()}
                />
              )}
            />
          </Body>
        )}
      </Pressable>
    </Container>
  );
}
