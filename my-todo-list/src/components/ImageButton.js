import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

 
export const ImageButton = ({text,icon, fun = () => console.log("clicked") }) => {
    return (
        <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
            onPress={fun}>
            <View style={[styles.container]}>
                <Ionicons name= {icon} size={30} color="black" />
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable >
    );
};
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 40,
        backgroundColor: "#5ab53c",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
 
    },
    text: {
        color: 'black'
    }
 
})