import { Icon } from "./styles";

import { Feather } from "@expo/vector-icons";

type MyScheduleIconProps = {
  size: number;
};

export default function MyScheduleIcon(props: MyScheduleIconProps) {
  return (
    <Icon>
      <Feather name="calendar" size={props.size} color="white" />
    </Icon>
  );
}
