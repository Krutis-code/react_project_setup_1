// convert object to string and store in localStorage
const saveToLocalStorage = (userData) => {
    try {
        var user = { 
            "loggedIn": true, 
            "userData": userData,
            "token" : userData.token 
        }
        localStorage.setItem('projectUser', JSON.stringify(user));
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
const loadFromLocalStorage = () => {
    try {
        const user = localStorage.getItem("projectUser");
        if (user === null) return undefined;
        return JSON.parse(user);
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

const removeFromLocalStorage = () => {
    try {
        const user = localStorage.getItem("projectUser");
        if (user === null) return undefined;
        return JSON.parse(user);
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

export {
    saveToLocalStorage,
    loadFromLocalStorage,
    removeFromLocalStorage
}