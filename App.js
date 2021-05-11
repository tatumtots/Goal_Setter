import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
} from "react-native"

//HOOKS EXAMPLE
// const [text, setText] = useState("jeya")
{
  /* <Button title='change text' onPress={() => setText("im changed")}>
        change text
      </Button> */
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoal = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inlineView}>
        <TextInput
          placeholder='Course Goal'
          style={styles.addInput}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title='ADD' onPress={addGoal} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem} key={itemData.item.key}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  )
}

{
  /*STYLES */
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
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
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
})
