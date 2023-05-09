import { Container, Content, SubTitle, Title } from "./styles";

import { View } from "react-native";

export default function Information() {
  return (
    <Container>
      <Content>
        <View>
          <Title>O que é o DevsBarbers?</Title>
          <SubTitle>
            O aplicativo DevsBarbers foi criado com o objetivo de aprimorar a
            experiência das pessoas na busca por barbeiros. Não é mais
            necessário solicitar indicações de amigos ou aguardar horas para
            conseguir um corte de cabelo. Agende seu horário com facilidade e
            simplifique sua vida!
          </SubTitle>
        </View>

        <View>
          <Title>Quando nasceu o DevsBarbers?</Title>
          <SubTitle>
            A ideia do aplicativo nasceu em meados de 2022, mas foi lançada
            apenas no início de 2023. Além disso, temos novas ideias para
            expandir cada vez mais o app com o intuito de facilitar o pedido de
            remédios.
          </SubTitle>
        </View>
      </Content>
    </Container>
  );
}
