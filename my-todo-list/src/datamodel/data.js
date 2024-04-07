import AsyncStorage from '@react-native-async-storage/async-storage';
const key = 'todo-Lists'
const dummyData = { Lists: [] }
export async function loadData() {
    try {
        str = await AsyncStorage.getItem(key);
        if (str != null) {
            const myData = JSON.parse(str)
            return myData
        }
        return dummyData
    } catch (e) {
        console.log('fail to read data with key ${key} ', e)
        return dummyData
 
    }
 
}
 
export async function saveData(myData) {
    const str = JSON.stringify(myData)
    try {
        await AsyncStorage.setItem(key, str)
    } catch (e) {
        console.log('fail to save data', e)
    }
}