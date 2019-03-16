import * as actionTypes from '../actions';
import {createStore} from 'redux';

const initialState = {
    categories: [],
    articles: []
};

const rss = (state = initialState, action) => {


    switch (action.type) {


        case actionTypes.STORE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };

        case actionTypes.STORE_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };

        default:
    }

    return state;
};
export default createStore((state, action) => (
    action && rss[action.type] ? rss[action.type](state, action) : state
), initialState, typeof devToolsExtension === 'function' ? devToolsExtension() : undefined);
