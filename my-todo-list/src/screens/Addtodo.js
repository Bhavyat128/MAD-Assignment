import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import TodoList from '../components/TodoList';
import Title from '../components/Title';
import { ImageButton } from '../components/ImageButton';
import { useState } from 'react';

const activity = ['Study Cybersecurity', 'Execute program', 'Shopping List', 'Daily chores'];
export default function Addtodo({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [taskdescr, setTaskDescription] = useState('');

  const back = () => navigation.navigate("Home");
  // const save = () => console.log("saved");
  const addText = () => {
    if (text === '') return
    // const maxid = tasks.reduce((a, t) => Math.max(a, t.id), 0)
    const maxid = tasks.length;
    console.log("maxid: ", maxid, text)
    setTasks(tasks => [...tasks, { id: maxid + 1, text: text, taskdescr: taskdescr, completed: false }])
    setText('');
    setTaskDescription('')
    console.log(tasks, maxid);
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Title title="Add New Todo" />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Text style={{ margin: 10 }}>Title</Text>
          <TextInput placeholder="Add a Task"
            style={styles.tasktitle}
            value={text}
            onChangeText={setText}
            onSubmitEditing={addText} />
          <Text style={{ margin: 10 }}>Description</Text>
          <TextInput placeholder="Add a Task Description"
            multiline={true}
            numberOfLines={5}
            style={styles.descrtitle}
            value={taskdescr}
            onChangeText={setTaskDescription}
            onSubmitEditing={addText} />

        </ScrollView>
      </View>

      <View style={styles.buttonContainer}>

        <ImageButton text="Back" icon="backspace" fun={back} />


        <ImageButton style={{ marginLeft: 20 }} text="Save" icon="save-sharp" fun={addText} />


      </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5cf82',
    flexDirection: 'column',

  },
  content: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a5cf82',
  },

  buttonContainer: {

    flexDirection: 'row',
    //position:'absolute',
    //marginBottom:50,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 20,
    borderRadius: 10,
    alignItems: 'baseline',

  },
  title: {
    //fontSize: 30,
    flex: 1,
    height: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  chess: {
    fontSize: 30,
    color: 'black',
    borderColor: 'blue',
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 5,
    marginBottom: 40,
    fontWeight: '500',
    backgroundColor: '#4386E6',
    borderBottomWidth: 4,
    borderRadius: 5,
    textAlign: 'center',
    height: '50%',

  },
  box: {
    height: 35,
    backgroundColor: '#5ab53c',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 5,

  },
  tasktitle: {
    width: '95%',
    height: 50,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
    marginLeft: 10,
    padding: 5,
    borderRadius: 10
  },
  descrtitle: {
    width: '95%',
    height: 100,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
    marginLeft: 10,
    padding: 5,
    borderRadius: 10,
  },

});
