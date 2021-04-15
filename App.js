import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLine={1} onPress={() => console.log("texrt")}>
        why my pic no show?
      </Text>
      <ImageDisplay />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const ImageDisplay = () => {
  return (
    <SafeAreaView style={styles.imageContainer}>
      <Image
        style={styles.cigaretteContainer}
        source={require("./components/images/ironic-cigarette.jpg")}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  cigaretteContainer: {
    width: 1,
    height: 1,
  },
  imageContainer: {
    flex: 0.5,
    alignItems: "center",
  },
})
