export const updateOrReplaceInArray = (array, subject, property) => {
    console.log(array);

    const foundIndex = array.findIndex(item => item._id === subject[property]);

    if (foundIndex === -1) {
        return [...array, subject];
    }

    array[foundIndex] = subject;

    return [...array];
};
