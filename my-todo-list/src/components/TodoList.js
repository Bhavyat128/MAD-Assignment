import { View, Text, StyleSheet, FlatList, Button, Pressable } from "react-native";
import { ImageButton } from "./ImageButton";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import { loadData, saveData } from "../datamodel/data";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';

export default TodoList = ({ lists }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalMessage, setmodalMessage] = useState('Finished Task!!!');
    const [deleteIndex, setDeleteIndex] = useState(-1);
    const [list, setTasks] = useState([]);
    const isFocused = useIsFocused();
    

    const firstLoad = async () => {
        const myData = await loadData();
        let lists = myData.Lists;
        setTasks(lists);
        expand(lists);
        // console.log('Initial Load Game',lists);
    };
  
    useEffect(() => {
        if (isFocused) {
            firstLoad();
        }
    }, [isFocused]);

    const expand = async (arr) => {
        let fetch = [];
        let filtered = [];
 
        fetch = [...arr];
        filtered = fetch.map(i => {
            const da = { ...i };
            if (da.expanded) {
                da.expanded = false;
            }
            return da
        });
        setTasks(filtered);
    };

    const onComplete = async (selected) => {
        //console.log("Finish this", selected);
        let fetch = [];
        let filtered = [];
        fetch = [...list];
        //console.log("Fetch", fetch)
        filtered = fetch.map(i => {
            const li = { ...i };
            if (i.id === selected) {
                li.completed = true;
            }
            return li
        });
        // console.log("Filtered", filtered)
        let arrayToSave = {};
        arrayToSave = { Lists: filtered };
        saveData(arrayToSave);
        firstLoad();
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
        //console.log("Fetch", fetch)
        filtered = fetch.filter(i => i.id != deleteIndex);
        let arrayToSave = {};
        arrayToSave = { Lists: filtered };
        saveData(arrayToSave);
        firstLoad();
        setmodalMessage('Deleted Successfully!!!')
        setModalVisible(true);
        // console.log("Game Entry Deleted", deleteIndex, filtered);
        //console.log("Updated Data", arrayToSave);
    };
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const clickDiv = (id) => {
        const updatedData = list.map((item) => {
            const updated = { ...item };
            if (item.id === id) {
                updated.expanded = !item.expanded;
            }
            return updated;
        });
        //console.log("Updated", updatedData)
        setTasks(updatedData);
        let arrayToSave = { Lists: updatedData };
        saveData(arrayToSave);
    };

    return (

        <View style={styles.List}>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={[styles.box, { flexDirection: 'column' }]} >
                        <Pressable onPress={() => clickDiv(item.id)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Text style={{ fontWeight: '700', fontSize: 25 }}>{item.text}</Text>
                                <View>
                                    {(item.expanded) && <Ionicons
                                        name="caret-up"
                                        size={20}
                                        color="black"
                                    />}
                                    {!(item.expanded) && <Ionicons
                                        name="caret-down"
                                        size={20}
                                        color="black"
                                    />}
                                </View>
                            </View>
                        </Pressable>
                        {(item.expanded) && (
                            <View>
                                <Text style={[styles.innertext, { fontWeight: '700' }]}>{item.taskdescr}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginLeft: 280 }}>
                                        {!(item.completed) && <ImageButton text="" color="green" back='no' icon="checkmark-circle" width={40} fun={onComplete.bind(this, item.id)} />}
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <ImageButton text="" icon="trash" color="red" back='no' width={40} fun={onDelete.bind(this, item.id)} />
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
        // height: 70,
        backgroundColor: '#CDF4BD',
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
    }
});
