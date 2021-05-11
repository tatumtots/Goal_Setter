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
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

//HOOKS EXAMPLE
// const [text, setText] = useState("jeya")
{
  /* <Button title='change text' onPress={() => setText("im changed")}>
        change text
      </Button> */
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoal = (goal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goal },
    ])
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoal} />
      {/*FLATLIST-- (item, index) parameters are built in, also 'item' and 'value'. Hit ctrl + space for options */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
})
