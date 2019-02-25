export const checkIfKeyExists = (key, arr) => {
    if (arr.length) {
        arr.forEach(el => el._id === key);
    }

    return true;
};
