import CardSchedule from "../../components/CardSchedule";
import { HeaderTitle } from "../Home/styles";
import { Body, Container, Header } from "./styles";

export default function MySchedules() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Meus agendamentos:</HeaderTitle>
      </Header>

      <Body>
        <CardSchedule />
      </Body>
    </Container>
  );
}
