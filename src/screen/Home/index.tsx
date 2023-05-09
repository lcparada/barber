import {
  TouchableOpacity,
  FlatList,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from "react-native";

import {
  LocationContainer,
  Container,
  Header,
  HeaderTitle,
  InputLocation,
  IconLocation,
  Body,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListBarbers from "../../components/ListBarbers";

import { barbers } from "../../data/barbers";

import { useNavigation } from "@react-navigation/native";

import * as Location from "expo-location";

import { useEffect, useState } from "react";

export default function Home() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const [address, setAddress] = useState<string>("");

  async function getLocation() {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please granted location permissions");
        setLoading(false);
      } else {
        let location = await Location.getCurrentPositionAsync({});
        let adress = await Location.reverseGeocodeAsync(location.coords);
        setAddress(`${adress[0]?.region}, ${adress[0]?.district} `);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <Header>
          <HeaderTitle>Encontre o {"\n"}barbeiro ideal! 💈</HeaderTitle>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
        </Header>

        <LocationContainer>
          <InputLocation
            placeholder="Onde você está?"
            placeholderTextColor="white"
            value={address}
          ></InputLocation>
          <IconLocation onPress={getLocation}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <MaterialCommunityIcons name="target" size={24} color="white" />
            )}
          </IconLocation>
        </LocationContainer>

        <Body>
          <FlatList
            contentContainerStyle={{ paddingBottom: 400 }}
            showsVerticalScrollIndicator={false}
            data={barbers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <ListBarbers
                  barberName={item.name}
                  barberImage={item.avatar}
                  barberId={item.id.toString()}
                  services={item.services}
                  favorite={false}
                />
              );
            }}
          />
        </Body>
      </Pressable>
    </Container>
  );
}
