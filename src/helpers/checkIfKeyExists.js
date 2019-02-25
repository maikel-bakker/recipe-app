export const checkIfKeyExists = (key, arr) => {
    if (arr.length) {
        arr.forEach(el => {
            return (el._id === key);
        });
    }

    return true;
};
