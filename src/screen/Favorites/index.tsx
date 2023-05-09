import { UserContext } from "../../contexts/userContext";

import { useContext, useState, useEffect } from "react";

import {
  Body,
  Container,
  Header,
  HeaderTitle,
  Nobody,
  NobodyTitle,
} from "./styles";

import ListBarbers from "../../components/ListBarbers";

import { BarberModel } from "../../contexts/userContext";

import { FlatList } from "react-native";

import { FireStoreService } from "../../services/firestore";

export default function Favorites() {
  const [favoriteBarbers, setFavoriteBarbers] = useState<BarberModel[]>([]);

  async function getFavoriteBarbers() {
    const userLogged = new FireStoreService().getUserLogged();

    const favoritebarbers = await new FireStoreService().getInformationUser(
      userLogged
    );
    setFavoriteBarbers(favoritebarbers?.favoritesBarbers);
  }

  useEffect(() => {
    getFavoriteBarbers();
  }, [favoriteBarbers]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meu(s) barbeiro(s) favorito(s) 🌟</HeaderTitle>
      </Header>

      {favoriteBarbers.length === 0 ? (
        <Nobody>
          <NobodyTitle>
            Você ainda não possui barbeiro(s) favorito(s)😞😞
          </NobodyTitle>
        </Nobody>
      ) : (
        <Body>
          <FlatList
            contentContainerStyle={{ paddingBottom: 200 }}
            data={favoriteBarbers}
            keyExtractor={(item) => item.barberId}
            renderItem={({ item }) => (
              <ListBarbers
                barberName={item.barberName}
                barberImage={item.barberImage}
                barberId={item.barberId}
                favorite={true}
              />
            )}
          />
        </Body>
      )}
    </Container>
  );
}
