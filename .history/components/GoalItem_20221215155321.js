/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Text, View, Pressable} from 'react-native';
import React from 'react';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#dddddd'}}
      onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
