import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from '../components/TodoList';
import Title from '../components/Title';
import { ImageButton } from '../components/ImageButton';

const activity = ['Study Cybersecurity', 'Execute program', 'Shopping List', 'Daily chores'];
const task=[{ id: 1, text: 'write a code' },{ id: 2, text: 'shopping' },{ id: 3, text: 'Plan study' },{ id: 4, text: 'watch youtube' },{ id: 5, text: 'offensive cyber' },{ id: 6, text: 'project cyber' },{ id: 7, text: 'make breakfast' },{ id: 8, text: 'cook lunch' },{ id: 9, text: 'dinner menu' },{ id: 10, text: 'practise yoga' },{ id: 11, text: 'meditation' },{ id: 12, text: 'mobile time off' },{ id: 13, text: 'newspaper' },{ id: 14, text: 'Book reading' },{ id: 15, text: 'packed for tour' }]
export default function TodoHome({ navigation }) {
  const addNewTask = () => navigation.navigate("Addtodo")

  return (
    <View style={styles.container}>
      <Title title="My Todo List" />
      <View style={{flex:9}}>
        <TodoList list={task} />
      </View>

      <View style={styles.buttonContainer}>
        <View style={{ marginRight: 40 }}>
          <ImageButton text=" Add New Todo" icon="add-circle-sharp" fun={addNewTask} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5cf82',

  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent:'center',
    alignContent:'center',

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

  }
});
