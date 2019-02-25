import { findIdInArray } from './findIdInArray';

export const filterNewItems = (oldItems, newItems) => newItems.filter(item => oldItems.length ? findIdInArray(oldItems, item._id) : true);
