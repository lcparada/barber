import { Animated, View, TextInputProps, TouchableOpacity } from "react-native";

import { TextInput, Input, ContainerInput } from "./styles";

import { useState } from "react";

type Props = TextInputProps & {
  name: string;
};

export default function InputScreens(props: Props) {
  const [animation] = useState(new Animated.Value(0));

  function upTheText() {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  function dropTheText() {
    if (props.value === "" || props.value == null) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      return;
    }
  }

  const moveText = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -35],
        }),
      },
    ],
  };

  return (
    <ContainerInput>
      <Input
        onFocus={upTheText}
        onBlur={dropTheText}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
      <Animated.View style={moveText}>
        <TextInput>{props.name}</TextInput>
      </Animated.View>
    </ContainerInput>
  );
}
