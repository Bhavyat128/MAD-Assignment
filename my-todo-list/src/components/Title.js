import { Text, View, StyleSheet, Pressable } from "react-native";

export const Title = ({ title }) => {
    return (
        <View style={styles.title}>
        <Text style={{ textAlign: 'center', fontSize: 35,fontStyle: 'italic', fontWeight: '500' }}> {title}</Text>
      </View>
    );
};
const styles = StyleSheet.create({
    title: {
        //fontSize: 30,
        flex: 1,
        height: 20,
        justifyContent: 'center',
        fontSize: 12,
        fontWeight:'bold',
        alignContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
      },

});
export default Title;