import React from "react"
import { View, Text, StyleSheet } from "react-native"

const GoalItem = (props) => {
  return (
    <View style={styles.listItem} key={props.key}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
  },
})

export default GoalItem
