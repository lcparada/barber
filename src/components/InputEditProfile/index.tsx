import { Container, ContainerInput, Input, TextOnInput } from "./styles";

import { TextInputProps } from "react-native";

type InputEditProfileProps = TextInputProps & {
  information: string;
};

export default function InputEditProfile(props: InputEditProfileProps) {
  return (
    <Container>
      <ContainerInput>
        <TextOnInput>{props.information}:</TextOnInput>
        <Input
          placeholder={props.placeholder}
          placeholderTextColor="white"
          value={props.value}
          onChangeText={props.onChangeText}
        ></Input>
      </ContainerInput>
    </Container>
  );
}
