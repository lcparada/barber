import { useNavigation } from "@react-navigation/native";

import {
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  Container,
  ContainerInput,
  DialIcon,
  Footer,
  Logo,
  TextButtonRegister,
  TextRegister,
} from "./styles";

import { useState } from "react";

import { Feather } from "@expo/vector-icons";

import { Pressable, Keyboard, ActivityIndicator } from "react-native";

import InputScreens from "../../components/InputHomeAndRegister";
import { FireStoreService } from "../../services/firestore";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);

  async function navigateToAppRoutes() {
    setLoading(true);
    try {
      const uid = await new FireStoreService().signIn(
        email.trim(),
        password.trim()
      );
      console.log(uid);

      navigation.navigate("AppRoutes");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert(e);
    }
  }

  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <Logo source={require("../../assets/logo.png")} />

        <ContainerInput>
          <InputScreens name="Email" value={email} onChangeText={setEmail} />
          <InputScreens
            name="Senha"
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
        <ButtonLogin onPress={navigateToAppRoutes}>
          <ButtonLoginText>
            {loading ? <ActivityIndicator size={16} color="white" /> : "Entrar"}
          </ButtonLoginText>
        </ButtonLogin>
        <Footer>
          <TextRegister>Ainda não tem conta?</TextRegister>
          <ButtonRegister onPress={() => navigation.navigate("Register")}>
            <TextButtonRegister>Crie agora!</TextButtonRegister>
          </ButtonRegister>
        </Footer>
      </Pressable>
    </Container>
  );
}
