import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Text,
  ActivityIndicator,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import PublicImages from "../constants/Image";
import { FILL, FILL_2 } from "../constants/Color";

export default function InputField({
  title,
  inputOnChangeHandler,
  inputBlurHandler,
  defaultValue,
  secureTextEntry = false,
  extraStyle,
  isAvailable,
}) {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(getToday("DD-MM-YYYY"));
  const [focus, setFocus] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "DD-MM-YYYY"
  );
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleDateChange = (selectedDate) => {
    console.log(selectedDate);
    // On iOS, showDatePicker is handled by the DateTimePicker itself
    if (selectedDate) {
      setDate(selectedDate);
      inputOnChangeHandler(selectedDate);
      setShowDatePicker(false); // Adjust the date format as needed
    }
  };

  const handleOnPress = () => {
    setShowDatePicker(true);
  };
  return (
    <View style={styles.inputContainer}>
      {title === "Date of Birth" ? (
        <TouchableOpacity onPress={handleOnPress}>
          <Text style={[{ flex: 1, fontSize: 16, color: "grey" }, extraStyle]}>
            {date}
          </Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          placeholder={title}
          value={defaultValue}
          onChangeText={inputOnChangeHandler}
          onBlur={inputBlurHandler}
          secureTextEntry={showPassword}
          onFocus={() => {
            setFocus(true);
          }}
          onEndEditing={() => {
            setFocus(false);
          }}
          style={[{ flex: 1, fontSize: 16 }, extraStyle]}
          autoCapitalize={
            title === "Email" ||
            title === "Email Address" ||
            title === "Username"
              ? "none"
              : "sentences"
          }
        />
      )}
      {(title === "Email Address" || title === "Username") &&
        (focus ? (
          isAvailable !== null && defaultValue.length > 0? (
            <Image
              source={
                isAvailable ? PublicImages.verified : PublicImages.decline
              }
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <ActivityIndicator />
          )
        ) : null)}

      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword}>
          <Image
            source={
              showPassword
                ? PublicImages.passwordShow
                : PublicImages.passwordEye
            }
          />
        </TouchableOpacity>
      )}
      <Modal transparent={true} visible={showDatePicker} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: "90%",
              borderRadius: 20,
              padding: 35,
              margin: 20,
              alignItems: "center",
              backgroundColor: FILL,
            }}
          >
            <DatePicker
              selected={date}
              mode="calender"
              onDateChange={handleDateChange}
              style={{ backgroundColor: FILL }}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(false)}>
              <Text style={{ fontSize: 17 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

// import React, { useEffect, useState } from "react";
// import {
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import PublicImages from "../constants/Image";
// export default function InputField({
//   title,
//   inputOnChangeHandler,
//   inputBlurHandler,
//   defaultValue,
//   secureTextEntry = false,
//   extraStyle
// }) {
// const [showPassword, setShowPassword] = useState(secureTextEntry);

// const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
// }

//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         placeholder={title}
//         value={defaultValue}
//         onChangeText={inputOnChangeHandler}
//         onBlur={inputBlurHandler}
//         secureTextEntry={showPassword}
//         style={[{ flex: 1, fontSize: 16 },extraStyle]}
//         autoCapitalize={title==='Email'?"none":"characters"}
//       />
//       {secureTextEntry && (
//         <TouchableOpacity onPress={toggleShowPassword}>
//           <Image source={showPassword?PublicImages.passwordShow:PublicImages.passwordEye} />
//         </TouchableOpacity>
//       )}

//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//     padding: 20,
//     borderRadius: 30,
//     backgroundColor: "#F3F5F7",
//   },
// });
