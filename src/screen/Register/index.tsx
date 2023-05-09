import { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import InputScreens from "../../components/InputHomeAndRegister";

import {
  ButtonBackLogin,
  ButtonRegister,
  Container,
  ContainerInput,
  Footer,
  Logo,
  TextAlreadyAccount,
  TextButtonBackLogin,
  TextButtonRegister,
  DialIcon,
} from "./styles";

import { Pressable, Keyboard, ActivityIndicator } from "react-native";

import { Feather } from "@expo/vector-icons";

import { FireStoreService } from "../../services/firestore";

export default function Register() {
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  async function createAccount() {
    setLoading(true);
    setDisabled(true);

    if (username !== "" || email !== "" || password !== "") {
      try {
        const uid = await new FireStoreService().register(
          email.trim(),
          password.trim()
        );

        await new FireStoreService().createUser(uid, username, email);
        navigation.navigate("Login");
        setLoading(false);
        setDisabled(false);
      } catch (e) {
        setDisabled(false);
        setLoading(false);
        console.log(e);
        alert(e);
      }
    }
  }
  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <Logo source={require("../../assets/logo.png")} />

        <ContainerInput>
          <InputScreens
            name="Digite seu nome"
            value={username}
            onChangeText={setUsername}
          />

          <InputScreens
            name="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />

          <InputScreens
            name="Digite sua senha"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={setPassword}
          />

          <DialIcon onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="white"
            />
          </DialIcon>
        </ContainerInput>

        <ButtonRegister disabled={disabled} onPress={createAccount}>
          <TextButtonRegister>
            {loading ? <ActivityIndicator color="white" size={16} /> : "Criar"}
          </TextButtonRegister>
        </ButtonRegister>

        <Footer>
          <TextAlreadyAccount>Já tem conta?</TextAlreadyAccount>
          <ButtonBackLogin onPress={() => navigation.goBack()}>
            <TextButtonBackLogin>Faça login!</TextButtonBackLogin>
          </ButtonBackLogin>
        </Footer>
      </Pressable>
    </Container>
  );
}
