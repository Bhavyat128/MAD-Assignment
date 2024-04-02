import {View,Text,StyleSheet,FlatList} from "react-native";

export const TodoList = ({ list }) => {
    return(
 
        <View style ={styles.List}>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={styles.box} >
                        <Text style={{ color: 'black',fontSize:18, marginLeft: 10, justifyContent: 'flex-start', alignSelf: 'center' }}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
List: {
  flex: 1,
  height: 20,
  justifyContent: 'center',
  alignContent: 'center',
  borderBottomWidth: 2,
  borderBottomColor: 'black', 
},

box: {
  height: 35,
  backgroundColor: '#5ab53c',
  margin: 5,
  flexDirection: 'row',
  borderRadius: 5,
}
});
export default TodoList;