import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"

//HOOKS EXAMPLE
// const [text, setText] = useState("jeya")
{
  /* <Button title='change text' onPress={() => setText("im changed")}>
        change text
      </Button> */
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inlineView}>
        <TextInput placeholder='Course Goal' style={styles.addInput} />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  )
}

{
  /*STYLES */
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inlineView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addInput: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    padding: 10,
    width: "80%",
  },
})
