import {
  CardBarber,
  CardBarberImage,
  CardBarberInfo,
  CardBarberName,
  CardBarberProfileButton,
  CardBarberProfileText,
  ModalContainer,
  ModalProfileBarber,
  ModalProfileBarberFavoriteButton,
  ModalProfileBarberImage,
  ModalProfileBarberInformations,
  NumberRate,
  Rate,
  RateModal,
  NumberRateModal,
  BodyModal,
  BodyModalTitle,
  ModalBackIcon,
  FlatListAssessmentModal,
  AssessmentModal,
} from "./styles";

import { Fragment, useState, useRef } from "react";

import { Modal, FlatList, TouchableOpacity } from "react-native";

import StarRating from "react-native-star-rating-widget";

import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListServices from "../ListServices";

type ServicesType = {
  nameService: string;
  price: string;
};

type IProps = {
  barberName: string;
  barberImage: string;
  barberId: string;
  favorite: boolean;
  services: ServicesType[];
};

import CardAssessment from "../CardAssessment";

import { assessments } from "../../data/barbers";

import { FireStoreService } from "../../services/firestore";

export default function ListBarbers(props: IProps) {
  const assessmentsRef = useRef<FlatList>(null);

  const [rating, setRating] = useState<number>(5);

  const [modalProfileVisible, setModalProfileVisible] =
    useState<boolean>(false);

  const [posX, setPosX] = useState<number>(0);

  const [favorite, setFavorite] = useState<boolean>(props.favorite);

  const [disabledClick, setDisabledClick] = useState<boolean>(false);

  async function addOrRemoveFavoriteBarber() {
    setDisabledClick(true);
    const userLogged = new FireStoreService().getUserLogged();
    const informationUserLogged =
      await new FireStoreService().getInformationUser(userLogged);
    const data = {
      barberId: props.barberId,
      barberName: props.barberName,
      barberImage: props.barberImage,
    };

    if (
      informationUserLogged?.favoritesBarbers.findIndex(
        (item: any) => item.barberId === props.barberId
      ) === -1
    ) {
      await new FireStoreService().updateFavoritesBarbers(
        userLogged as string,
        data
      );
      setFavorite(true);
      setDisabledClick(false);
    } else if (
      informationUserLogged?.favoritesBarbers.find(
        (item: any) => item.barberId === props.barberId
      )
    ) {
      await new FireStoreService().removeFavoritesBarbers(
        userLogged as string,
        data
      );
      setFavorite(false);
      setDisabledClick(false);
    }
  }

  function scrollToNext() {
    assessmentsRef.current?.scrollToOffset({
      offset: posX + 310,
      animated: true,
    });
    setPosX(posX + 310);
  }

  function scrollToBack() {
    assessmentsRef.current?.scrollToOffset({
      offset: posX - 310,
      animated: true,
    });
    setPosX(posX - 310);
  }
  return (
    <Fragment>
      <CardBarber>
        <CardBarberImage source={{ uri: props.barberImage }} />
        <CardBarberInfo>
          <CardBarberName>{props.barberName}</CardBarberName>
          <Rate>
            <StarRating
              rating={rating}
              onChange={setRating}
              color="#D3B719"
              starSize={20}
              starStyle={{ marginHorizontal: 0 }}
              emptyColor="#D3B719"
            />
            <NumberRate>5</NumberRate>
          </Rate>
          <CardBarberProfileButton
            onPress={() => setModalProfileVisible(!modalProfileVisible)}
          >
            <CardBarberProfileText>Ver perfil</CardBarberProfileText>
          </CardBarberProfileButton>
        </CardBarberInfo>
      </CardBarber>

      <Modal animationType="slide" visible={modalProfileVisible}>
        <ModalContainer>
          <ModalBackIcon
            onPress={() => setModalProfileVisible(!modalProfileVisible)}
          >
            <Feather name="arrow-left" size={28} color="black" />
          </ModalBackIcon>
        </ModalContainer>

        <ModalProfileBarber>
          <ModalProfileBarberImage source={{ uri: props.barberImage }} />
          <ModalProfileBarberFavoriteButton
            style={{ elevation: 5 }}
            onPress={addOrRemoveFavoriteBarber}
            disabled={disabledClick}
          >
            <MaterialCommunityIcons
              name={favorite ? "heart" : "heart-outline"}
              size={24}
              color="red"
            />
          </ModalProfileBarberFavoriteButton>

          <ModalProfileBarberInformations>
            {props.barberName}
          </ModalProfileBarberInformations>
          <RateModal>
            <StarRating
              rating={rating}
              onChange={setRating}
              color="#D3B719"
              starSize={20}
              starStyle={{ marginHorizontal: 0 }}
              emptyColor="#D3B719"
            />
            <NumberRateModal>5</NumberRateModal>
          </RateModal>

          <BodyModal>
            <BodyModalTitle>Lista de serviços</BodyModalTitle>
            <FlatList
              contentContainerStyle={{ paddingBottom: 50 }}
              showsVerticalScrollIndicator={false}
              decelerationRate={"fast"}
              data={props.services}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return (
                  <ListServices
                    barberImage={props.barberImage}
                    barberName={props.barberName}
                    nameService={item.nameService}
                    priceService={item.price}
                  />
                );
              }}
            />
          </BodyModal>

          <AssessmentModal>
            <TouchableOpacity onPress={scrollToBack}>
              <Feather name="chevron-left" size={35} color="white" />
            </TouchableOpacity>

            <FlatListAssessmentModal>
              <FlatList
                contentContainerStyle={{
                  paddingRight: 20,
                  height: 150,
                }}
                decelerationRate={"fast"}
                ref={assessmentsRef}
                showsHorizontalScrollIndicator={false}
                snapToInterval={310}
                horizontal={true}
                data={assessments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CardAssessment name={item.name} comment={item.comment} />
                )}
                onMomentumScrollEnd={(event) =>
                  setPosX(Math.round(event.nativeEvent.contentOffset.x))
                }
              />
            </FlatListAssessmentModal>
            <TouchableOpacity onPress={scrollToNext}>
              <Feather name="chevron-right" size={35} color="white" />
            </TouchableOpacity>
          </AssessmentModal>
        </ModalProfileBarber>
      </Modal>
    </Fragment>
  );
}
