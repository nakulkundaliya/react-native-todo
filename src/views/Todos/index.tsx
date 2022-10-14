import {BlurView} from '@react-native-community/blur';
import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Todo} from '../../components';
import {
  addAction,
  deleteAction,
  editAction,
  getAction,
} from '../../redux/action/todos';
import {useAppSelector} from '../../redux/store';
import {styles} from './styles';

interface TodoItem {
  id: string;
  task: string;
}
const Todos = () => {
  const [task, setTask] = useState<string>('');
  const [editId, setEditId] = useState<string>('');

  const todos = useAppSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const inputRef = useRef<TextInput | null>(null);
  useEffect(() => {
    dispatch(getAction());
  }, []);

  const addTask = () => {
    const data = {text: task};
    dispatch(addAction(data));
    setTask('');
  };

  const deleteTask = (deleteId: string) => {
    dispatch(deleteAction(deleteId));
    setTask('');
  };

  const openEditInput = (text: string, editId: string) => {
    setTask(text);
    setEditId(editId);
    inputRef?.current?.focus();
  };

  const editTask = () => {
    setTask('');
    const data = {data: {text: task}, editId};
    dispatch(editAction(data));
    setEditId('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {todos.loading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Task List</Text>
          <View style={styles.items}>
            {todos?.tasks.map((item: any) => (
              <Todo
                task={item.description}
                id={item._id}
                key={item._id}
                onPressDelete={deleteTask}
                onPressEdit={openEditInput}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          ref={inputRef}
          value={task}
          style={styles.input}
          placeholder="Add a task"
          placeholderTextColor={'black'}
          onChangeText={(e: string) => setTask(e)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={editId ? editTask : addTask}>
          <Text>{editId ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Todos;
