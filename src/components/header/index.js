import { Component, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { connect } from 'preact-redux';
import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

@connect(reduce, actions)
export default class App extends Component {
	render() {

		//map through the persons date and list them after filtering
		const header = this.props.categories.map(x => {
				return (

					<a href={'/' + x}><i className="fa fa-fw fa-envelope"></i> {x}</a>

				);
			}
		);

		return (

			<div className="sidebar">
				<a href={'/all'}><i className="fa fa-fw fa-envelope"></i> Home</a>

				{header}

			</div>
		);
	}
}


