import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PublicImages from "../constants/Image";
export default function InputField({
  title,
  onChange,
  secureTextEntry = false,
  extraStyle
}) {
const [showPassword, setShowPassword] = useState(secureTextEntry);

const toggleShowPassword = () => {
    setShowPassword(!showPassword);
}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={title}
        onChangeText={onChange}
        secureTextEntry={showPassword}
        style={[{ flex: 1, fontSize: 16 },extraStyle]}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword}>
          <Image source={showPassword?PublicImages.passwordShow:PublicImages.passwordEye} />
        </TouchableOpacity>
      )}

    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#F3F5F7",
  },
});
