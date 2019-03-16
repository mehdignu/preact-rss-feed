import {h, Component} from 'preact';
import {Router} from 'preact-router';
import Header from './header';
import Category from '../routes/category';

var XMLParser = require('react-xml-parser');

export default class App extends Component {

    /** Gets fired when the route changes.
     *    @param {Object} event        "change" event from [preact-router](http://git.io/preact-router)
     *    @param {string} event.url    The newly routed URL
     */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    componentWillMount() {


        //get the data from the xml page
        fetch("https://funkygames.de/rss.xml")
            .then(response => response.text())
            .then(data => console.log(new XMLParser().parseFromString(data).children[0]));


    }

    render() {
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
