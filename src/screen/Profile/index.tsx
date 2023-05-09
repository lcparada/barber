import { useNavigation } from "@react-navigation/native";

import ProfileButton from "../../components/ProfileButton";

import { LogBox } from "react-native";

import {
  Container,
  Header,
  HeaderAvatar,
  HeaderName,
  Img,
  HeaderEmail,
  Buttons,
  HeaderTitle,
} from "./styles";

import { FireStoreService } from "../../services/firestore";

import { useState, useEffect } from "react";

export default function Profile() {
  LogBox.ignoreAllLogs(true);

  const navigation = useNavigation();

  const [avatar, setAvatar] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function getUserInformation() {
    const userLogged = new FireStoreService().getUserLogged();
    const informations = await new FireStoreService().getInformationUser(
      userLogged
    );
    setAvatar(informations?.avatar);
    setEmail(informations?.email);
    setName(informations?.name);
  }

  function logout() {
    new FireStoreService().signOut();
  }

  useEffect(() => {
    const timer = setInterval(() => getUserInformation(), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>Meu Perfil🥰</HeaderTitle>
        <HeaderAvatar style={{ elevation: 5 }}>
          <Img
            source={{
              uri: avatar,
            }}
          />
        </HeaderAvatar>
        <HeaderName>{name}</HeaderName>
        <HeaderEmail>{email}</HeaderEmail>
      </Header>

      <Buttons>
        <ProfileButton
          iconName="edit"
          actionName="Editar perfil"
          color="#6665ff"
          onPress={() => navigation.navigate("EditProfile")}
        />
        <ProfileButton
          iconName="help-circle"
          actionName="Informações do app"
          color="#6665ff"
          onPress={() => navigation.navigate("Information")}
        />
        <ProfileButton
          iconName="lock"
          actionName="Redefinir senha"
          color="#6665ff"
          onPress={() => console.log("Redefinir senha")}
        />
        <ProfileButton
          iconName="log-out"
          actionName="Sair"
          color="#be111d"
          onPress={() => logout()}
        />
      </Buttons>
    </Container>
  );
}
