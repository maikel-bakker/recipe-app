export const createReducer = (reducerState, handlers) => {
    return (state = reducerState, action) => {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
};
