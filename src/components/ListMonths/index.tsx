import { MonthText, Months } from "./styles";

type ListMonthProps = {
  monthName: string;
};

export default function ListMonth(props: ListMonthProps) {
  return (
    <Months>
      <MonthText>{props.monthName}</MonthText>
    </Months>
  );
}
