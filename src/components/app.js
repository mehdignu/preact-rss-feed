import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header';
import Category from '../routes/category';

var XMLParser = require('react-xml-parser');
import { connect } from 'preact-redux';
import reduce from '../store/reducers';
import * as actions from '../store/actions';


@connect(reduce, actions)
export default class App extends Component {

	/** Gets fired when the route changes.
	 *    @param {Object} event        "change" event from [preact-router](http://git.io/preact-router)
	 *    @param {string} event.url    The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentWillMount() {

		let cats = [];
		let articles = [];


		//get the data from the xml page
		fetch('https://funkygames.de/rss.xml')
			.then(response => response.text())
			.then(data => new XMLParser().parseFromString(data).children[0])
			.then(data => {

				data.children.forEach(element => {

					if (element.name === 'category')
						cats.push(element.value);

					if (element.name === 'item') {
						let newData = JSON.stringify(element);

						articles.push(JSON.parse(newData));

					}

				});
			})

			.then(() => {

				this.props.storeCategories(cats);
				this.props.storeArticles(articles);

			});
	}

	render() {


		//wait until the data is loaded
		if (this.props.categories === undefined || this.props.articles === undefined) {

			return (
				<div/>
			);

		}

		return (

			<div id="app">
				<Header/>
				<Router onChange={this.handleRoute}>
					<Category path="/" cat="all"/>
					<Category path="/:cat"/>
				</Router>
			</div>
		);
	}
}

