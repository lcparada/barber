import { TouchableOpacity } from "react-native";
import { Container, Icon, Text } from "./styles";

import { Feather } from "@expo/vector-icons";

type Informations = {
  actionName: string;
  iconName: any;
  color: string;
  onPress: () => void;
};

export default function ProfileButton(props: Informations) {
  return (
    <Container>
      <TouchableOpacity onPress={props.onPress}>
        <Icon color={props.color}>
          <Feather name={props.iconName} size={24} color="white" />
        </Icon>
      </TouchableOpacity>
      <Text>{props.actionName}</Text>
    </Container>
  );
}
