import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const list = ['Study Cybersecurity', 'Execute program', 'Shopping List', 'Daily chores']
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '500' }}> My Todo List</Text>
      </View>
      <View style={{ flex:5, marginTop: 30 }}>
        {list.map((s, i) => (
          <View style={styles.box} key={i}>
            <Text style={{ color: 'black', marginLeft: 20, justifyContent: 'flex-start', alignSelf: 'center' }}>{s}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', width: '100%', borderTopWidth: 2 }}>
        <Text style={styles.chess}> Add New Todo </Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#fff',
    
  },
  title: {
    //fontSize: 30,
    flex: 1,
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
    marginBottom: 50,
    fontWeight: '500',
    backgroundColor: '#4386E6',
    borderBottomWidth: 4,
    borderRadius: 5,
    textAlign: 'center',

  },
  box: {
    height: 35,
    backgroundColor: '#59E69C',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 5,

  }
});
