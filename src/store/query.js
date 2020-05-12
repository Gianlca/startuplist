import { createStore } from 'easy-peasy';
import { action } from 'easy-peasy';

const store = {
    query:[],
    addQuery: action((state, entry) => {
        state.query.splice(0, 1, entry);
    })
}

export default createStore(store);