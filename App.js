import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a Text component</Text>
      <ImageDisplay />
      <StatusBar style='auto' />
    </View>
  )
}

const ImageDisplay = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.cigaretteContainer}
        source={require("./components/images/ironic-cigarette.jpg")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cigaretteContainer: {
    width: 2,
    height: 2,
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
  },
})
