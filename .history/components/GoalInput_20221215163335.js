/* eslint-disable prettier/prettier */
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
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
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalhandler} />
          </View>
          <View>
            <Button
              title="Cancel"
              style={styles.button}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  image: {
    width: 100,
    height: 100,
    padding: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius: 6,
  },
});
