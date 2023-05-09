import {
  ButtonBack,
  ButtonPrev,
  Container,
  ContainerDays,
  ContainerMonth,
  Days,
  DaysButton,
  DaysItem,
  DaysName,
  MonthSelected,
} from "./styles";

import moment from "moment";

import { Feather } from "@expo/vector-icons";

import { Months, calculateDaysInMonth, getDayOfWeek } from "../../helpers";

import { useState, useEffect, useRef } from "react";

import { FlatList } from "react-native-gesture-handler";

type CalendarProps = {
  selectedDay: number;
  setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
};

export function Calendar(props: CalendarProps) {
  const dayRef = useRef<FlatList>(null);

  const today = moment().subtract(new Date().getTimezoneOffset() / 60, "hours");

  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  function handleToNextMonth() {
    if (props.selectedMonth === 11) {
      props.setSelectedMonth(0);
    } else {
      props.setSelectedMonth(props.selectedMonth + 1);
    }
  }

  function handleToPrevMonth() {
    if (props.selectedMonth === 0) {
      props.setSelectedMonth(11);
    } else {
      props.setSelectedMonth(props.selectedMonth - 1);
    }
  }

  function scrollToDay() {
    dayRef.current?.scrollToOffset({
      offset: 53 * (props.selectedDay - 1),
      animated: true,
    });
  }

  function ScrollToCurrentWhenToggleMonth() {
    if (props.selectedMonth === today.month()) {
      props.setSelectedDay(today.date());
      dayRef.current?.scrollToOffset({
        offset: 53 * (today.date() - 1),
        animated: true,
      });
    } else {
      props.setSelectedDay(1);
      dayRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }

  useEffect(() => {
    setDaysInMonth(calculateDaysInMonth(props.selectedMonth));
  }, [props.selectedMonth]);

  useEffect(() => {
    ScrollToCurrentWhenToggleMonth();
  }, [props.selectedMonth]);

  useEffect(() => {
    scrollToDay();
  }, [props.selectedDay]);

  return (
    <Container>
      <ContainerMonth>
        <ButtonBack onPress={handleToPrevMonth}>
          <Feather name="chevron-left" size={30} color="white" />
        </ButtonBack>
        <MonthSelected>{Months[props.selectedMonth]}</MonthSelected>
        <ButtonPrev onPress={handleToNextMonth}>
          <Feather name="chevron-right" size={30} color="white" />
        </ButtonPrev>
      </ContainerMonth>

      <ContainerDays>
        <FlatList
          ref={dayRef}
          contentContainerStyle={{ paddingLeft: 56 * 3, paddingRight: 50 * 3 }}
          horizontal={true}
          snapToInterval={53}
          data={daysInMonth}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <DaysButton key={index} onPress={() => props.setSelectedDay(item)}>
              <DaysItem
                background={
                  props.selectedDay === item ? "white" : "transparent"
                }
              >
                <DaysName
                  color={props.selectedDay === item ? "#66ff" : "white"}
                >
                  {
                    getDayOfWeek()[
                      moment(
                        `2023-${props.selectedMonth + 1}-${item + 1}`
                      ).day()
                    ]
                  }
                </DaysName>
                <Days color={props.selectedDay === item ? "#66ff" : "white"}>
                  {item}
                </Days>
              </DaysItem>
            </DaysButton>
          )}
        />
      </ContainerDays>
    </Container>
  );
}
