import { View, Text, StyleSheet, FlatList,Button } from "react-native";
import { ImageButton } from "./ImageButton";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import { loadData,saveData } from "../datamodel/data";

export const TodoList = ({ list }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalMessage, setmodalMessage] = useState('Finished Task!!!');
    const [deleteIndex, setDeleteIndex] = useState(-1);

    const handleTaskPress = (taskId) => {
        // Navigate to a task detail screen, passing the taskId
        // navigation.navigate("TaskDetail", { taskId });

    };
    // const onComplete = () => {
    //     console.log("Complete");

    // };
    // const onDelete = () => {
    //     console.log("Deleted");

    // };
    const onComplete = async (selected) => {
        console.log("Finish this", selected);
        let fetch = [];
        let filtered = [];
        fetch = [...list];
        console.log("Fetch", fetch)
        filtered = fetch.map(i => {
            const li = { ...i };
            if (i.id === selected) {
                li.completed = true;
            }
            return li
        });
        console.log("Filtered", filtered)
        let arrayToSave = {};
        arrayToSave = { Lists: filtered };
        saveData(arrayToSave);
        setmodalMessage('Completed Successfully!!!')
        setModalVisible(!isModalVisible);
    };
 
    const onDelete = (index) => {
        setDeleteIndex(index);
        setmodalMessage('Delete confirmed?')
        setModalVisible(!isModalVisible);
    };
    const onDeleteConfirm = () => {
        setModalVisible(!isModalVisible);
        let fetch = [];
        let filtered = [];
        fetch = [...list];
        console.log("Fetch", fetch)
        filtered = fetch.filter(i => i.id != deleteIndex);
        let arrayToSave = {};
        arrayToSave = { Lists: filtered };
        saveData(arrayToSave);
        setmodalMessage('Deleted Successfully!!!')
        setModalVisible(true);
        // console.log("Game Entry Deleted", deleteIndex, filtered);
        console.log("Updated Data", arrayToSave);
    };
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (

        <View style={styles.List}>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={[styles.box, { flexDirection: 'column' }]} >
                        <Text style={{ color: 'black', fontSize: 18, marginLeft: 10 }}>{item.text}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 40 }}>
                                {!(item.completed) &&<ImageButton text="" icon="checkmark-circle" width={40} fun={onComplete.bind(this, item.id)} />}
                            </View>
                            <View style={{ marginRight: 40 }}>
                                <ImageButton text="" icon="trash" width={40} fun={onDelete.bind(this, item.id)} />
                            </View>
                        </View>
                        <Modal isVisible={isModalVisible} style={{ height: 200, width: 350, justifyContent: 'center', alignItems: 'center' }} animationType="slide">
                            <View style={{ backgroundColor: 'white', padding: 20 }}>

                                <Text style={{ marginTop: 10 }}>{modalMessage}</Text>

                                {modalMessage === 'Delete confirmed?' && <View style={{ marginTop: 10 }}>
                                    <Button title="Yes" onPress={onDeleteConfirm} />
                                </View>}
                                {(modalMessage === 'Completed Successfully!!!') && <View style={{ marginTop: 10 }}>
                                    <Button title="Ok" onPress={toggleModal} />
                                </View>}
                                {(modalMessage === 'Deleted Successfully!!!') && <View style={{ marginTop: 10 }}>
                                    <Button title="Ok" onPress={toggleModal} />
                                </View>}
                                {modalMessage === 'Delete confirmed?' && <View style={{ marginTop: 10 }}>
                                    <Button title="Cancel" onPress={toggleModal} />
                                </View>}
                            </View>
                        </Modal>
                    </View>

                )}
                keyExtractor={(item) => item.id.toString()}
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
        height: 70,
        backgroundColor: '#5ab53c',
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
    }
});
export default TodoList;