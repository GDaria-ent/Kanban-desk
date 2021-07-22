
const localStorageKey = '__cards_list__';

const Api = {
    updateDB(updatedData) {
        localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    },
    getDBData() {
        let currentDataFromDB = localStorage.getItem(localStorageKey) || '[]';
        return JSON.parse(currentDataFromDB);
    }
}

export default Api;



