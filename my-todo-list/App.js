import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const list = ['Study Cybersecurity', 'Execute program', 'Shopping List', 'Daily chores']
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontSize: 35,fontStyle: 'italic', fontWeight: '500' }}> My Todo List</Text>
      </View>
      <View style={{ flex:7, marginTop: 10 }}>
        {list.map((s, i) => (
          <View style={styles.box} key={i}>
            <Text style={{ color: 'black',fontSize:18, marginLeft: 20, justifyContent: 'flex-start', alignSelf: 'center' }}>{s}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, height:'100%', justifyContent: 'center', alignSelf: 'center', width: '100%', borderTopWidth: 2 }}>
        <Text style={styles.chess}> Add New Todo </Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#a5cf82',
    
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
    height:'50%',

  },
  box: {
    height: 35,
    backgroundColor: '#5ab53c',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 5,

  }
});
