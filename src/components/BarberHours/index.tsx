import { useEffect, useState, useRef } from "react";
import { Container, HoursButton, HoursItem, HoursText } from "./styles";
import { getBarbersHours } from "../../helpers";
import { FlatList } from "react-native";

type BarberHoursProps = {
  selectedHour: string;
  setSelectedHour: (day: string) => void;
  selectedDay: number;
};

export default function BarbersHours(props: BarberHoursProps) {
  const [barberHours, setBarberHours] = useState<string[]>([]);

  const [selectedHourPosX, setSelectedHourPosX] = useState<number | null>(0);

  const hourRef = useRef<FlatList>(null);

  function scrollToSelectedHour() {
    hourRef.current?.scrollToOffset({
      offset: (selectedHourPosX as number) * 123,
      animated: true,
    });
  }

  function scrollToInitialHourWhenChangeDay() {
    hourRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }

  useEffect(() => {
    setBarberHours(getBarbersHours());
  }, []);

  useEffect(() => {
    scrollToSelectedHour();
  }, [selectedHourPosX]);

  useEffect(() => {
    props.setSelectedHour("");
    setSelectedHourPosX(null);
    scrollToInitialHourWhenChangeDay();
  }, [props.selectedDay]);

  return (
    <Container>
      <FlatList
        ref={hourRef}
        contentContainerStyle={{
          alignSelf: "center",
          paddingLeft: 138,
          paddingRight: 20,
        }}
        decelerationRate={"fast"}
        snapToInterval={123}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={barberHours}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <HoursButton
            key={index}
            onPress={() => {
              setSelectedHourPosX(index), props.setSelectedHour(item);
            }}
          >
            <HoursItem
              backgroundColor={
                selectedHourPosX === index ? "white" : "transparent"
              }
            >
              <HoursText
                color={selectedHourPosX === index ? "#666eff" : "white"}
              >
                {item}
              </HoursText>
            </HoursItem>
          </HoursButton>
        )}
      />
    </Container>
  );
}
