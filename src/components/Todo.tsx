import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Delete, Edit} from '../assets';

interface Todo {
  task: string;
  id: string;
  onPressEdit?: (task: string, editId: string) => void;
  onPressDelete?: (deleteId: string) => void;
}

const Todo = ({task, id, onPressEdit, onPressDelete}: Todo) => {
  return (
    <View style={styles.container}>
      <Text style={styles.task}>{task}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actions}
          activeOpacity={0.5}
          onPress={() => (onPressEdit ? onPressEdit(task, id) : {})}>
          <Image source={Edit} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actions}
          activeOpacity={0.5}
          onPress={() => (onPressDelete ? onPressDelete(id) : {})}>
          <Image source={Delete} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#bebebe',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    flexGrow: 1,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 9,
    elevation: 2,
  },
  task: {flex: 1, color: 'black', fontWeight: '600', fontSize: 20},
  actionsContainer: {flexDirection: 'row'},
  actions: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
    marginHorizontal: 10,
  },
  actionIcon: {height: 22, width: 22},
});
