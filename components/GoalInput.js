import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <View style={styles.inlineView}>
      <TextInput
        placeholder='Course Goal'
        style={styles.addInput}
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  )
}

{
  /*STYLES */
}
const styles = StyleSheet.create({
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

export default GoalInput
