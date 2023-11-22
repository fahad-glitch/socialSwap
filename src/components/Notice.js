import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FILL, FILL_2, GRADIENT_1, GRADIENT_2 } from "../constants/Color";

export default function Notice({ title, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: GRADIENT_2,
        letterSpacing: 0,
        textAlign: "center",
        marginBottom: 20,
        textTransform: "uppercase",
    },
    messageContainer: {
        backgroundColor:FILL_2,
        padding: 20,
        borderRadius: 10,
    },
    message: {
        fontSize: 18,
        fontWeight: "normal",
        letterSpacing: 0,
        textAlign: "center",
        textTransform: "none",
    },
});
