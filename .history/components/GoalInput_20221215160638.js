/* eslint-disable prettier/prettier */
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';
import React from 'react';
import {useState} from 'react';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState();
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalhandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addGoalhandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
  },
});
