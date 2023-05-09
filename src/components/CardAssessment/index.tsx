import {
  CardAssessmentContainer,
  HeaderTitle,
  Header,
  Comment,
  Container,
} from "./styles";

import { useState } from "react";

import StarRating from "react-native-star-rating-widget";

type AssessmentsProps = {
  name: string;
  comment: string;
};

export default function CardAssessment(props: AssessmentsProps) {
  const [rating, setRating] = useState(5);

  return (
    <Container>
      <CardAssessmentContainer style={{ elevation: 10 }}>
        <Header>
          <HeaderTitle>{props.name}</HeaderTitle>
          <StarRating
            rating={rating}
            onChange={setRating}
            starSize={16}
            maxStars={5}
            starStyle={{ marginHorizontal: 0 }}
          />
        </Header>
        <Comment>{props.comment}</Comment>
      </CardAssessmentContainer>
    </Container>
  );
}
