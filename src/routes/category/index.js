import { h, Component } from 'preact';
import style from './style';
import { connect } from 'preact-redux';
import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

@connect(reduce, actions)
export default class Category extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};


	// gets called when this route is navigated to
	componentWillMount() {


	}

	componentDidMount() {

		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUpdate() {

		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ cat }, { time, count }) {


		const articles = this.props.articles

			.filter((x) =>
				(x.children[4].value === cat)
			)

			.map(x => {

					return (

						<a href={x.children[2].value}>
							<div className="column">
								<div className="card">
									<h3>{x.children[0].value}</h3>
									<p>{x.children[1].value}</p>
								</div>
							</div>
						</a>


					);
				}
			);


		return (

			<div className="row">

				{articles}
			</div>


		);
	}
}
