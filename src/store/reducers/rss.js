import { createStore } from 'redux';

let ACTIONS = {
	STORE_CATEGORIES: ({ categories, ...state }, { cats }) => ({
		categories: cats,
		...state
	}),

	STORE_ARTICLES: ({ articles, ...state }, { articls }) => ({
		articles: articls,
		...state
	})
};

const INITIAL = {
	categories: [],
	articles: []
};

export default createStore((state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension === 'function' ? devToolsExtension() : undefined);
