import {
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  ActivityIndicator,
  LogBox,
} from "react-native";

import {
  Body,
  Button,
  ButtonText,
  ButtonTextUnderCep,
  ButtonUnderCep,
  ChangePhotoText,
  Container,
  Email,
  EmailText,
  FindCep,
  Footer,
  Header,
  Photo,
  TextOnEmail,
  TextUnderCep,
} from "./styles";

import InputEditProfile from "../../components/InputEditProfile";

import { useState, useEffect } from "react";

import * as ImagePicker from "expo-image-picker";

import * as Location from "expo-location";

import { FireStoreService } from "../../services/firestore";

export default function EditProfile() {
  LogBox.ignoreAllLogs(true);

  const [newName, setNewName] = useState<string>("");
  const [newCep, setnewCep] = useState<string>("");
  const [newImage, setNewImage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSave, setLoadingSave] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  async function getUserInformation() {
    const userLogged = new FireStoreService().getUserLogged();
    const informations = await new FireStoreService().getInformationUser(
      userLogged
    );
    setNewName(informations?.name);
    setnewCep(informations?.cep);
    setNewImage(informations?.avatar);
    setEmail(informations?.email);
  }

  async function sendChanges() {
    const userLogged = new FireStoreService().getUserLogged();
    setLoading(true);

    try {
      await new FireStoreService().updateChanges(
        newName,
        newCep,
        newImage,
        userLogged as string
      );
      Alert.alert("Sucesso", "Alterações salvas com sucesso!");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setNewImage(result.assets[0].uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  async function getCep() {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Please granted location permissions");
        setLoading(false);
      } else {
        let location = await Location.getCurrentPositionAsync({});
        let adress = await Location.reverseGeocodeAsync(location.coords);
        setnewCep(adress[0]?.postalCode ?? "");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <Container>
      <ScrollView>
        <Header>
          <Photo
            source={{
              uri: newImage,
            }}
          />
          <TouchableOpacity onPress={pickImage}>
            <ChangePhotoText>Mudar foto + </ChangePhotoText>
          </TouchableOpacity>
        </Header>

        <Body>
          <InputEditProfile
            information="Nome"
            placeholder="Seu nome"
            value={newName}
            onChangeText={setNewName}
          />
          <View>
            <TextOnEmail>Email:</TextOnEmail>
            <Email>
              <EmailText>{email}</EmailText>
            </Email>
          </View>
          <View>
            <InputEditProfile
              information="CEP"
              placeholder={
                loading ? "Carregando ..." : newCep === "" ? "Seu cep" : newCep
              }
              value={newCep}
              onChangeText={setnewCep}
            />
          </View>
          <FindCep>
            <TextUnderCep>Não sabe seu cep? </TextUnderCep>
            <ButtonUnderCep onPress={getCep}>
              <ButtonTextUnderCep>Toque aqui!</ButtonTextUnderCep>
            </ButtonUnderCep>
          </FindCep>
        </Body>

        <Footer>
          <Button onPress={sendChanges} disabled={disabled}>
            <ButtonText>
              {loadingSave ? <ActivityIndicator color="white" /> : "Salvar"}
            </ButtonText>
          </Button>
        </Footer>
      </ScrollView>
    </Container>
  );
}
