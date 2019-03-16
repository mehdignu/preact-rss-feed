
export function storeCategories(cats) {
	return {
		type: 'STORE_CATEGORIES',
		cats
	};
}


export function storeArticles(articls) {
	return {
		type: 'STORE_ARTICLES',
		articls
	};
}
