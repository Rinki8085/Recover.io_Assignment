import { legacy_createStore, combineReducers,applyMiddleware } from "redux";
import {reducer as AppReducer} from './AppReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';

const rootReducer = combineReducers({AuthReducer, AppReducer});

// next => go to the next middleware if available, else go to the reducer function
// action => action object that we get from the dispatch method

const customMiddleware = (store)=> next =>action=>{ 
    //action -> dispatch(action) - getTasks();
    if(typeof action === 'function'){
        return action(store.dispatch)
    }else if(typeof action === 'object'){
        return next(action);
    }
}

const store = legacy_createStore(rootReducer,applyMiddleware(customMiddleware));
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export {store}; 