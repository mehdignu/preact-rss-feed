import {h, Component} from 'preact';
import style from './style';
import {connect} from 'preact-redux';
import reduce from '../../store/reducers';
import * as actions from '../../store/actions';

@connect(reduce, actions)
export default class Category extends Component {


    render({cat}) {


        const articles = this.props.articles

            .filter((x) =>
                ((cat !== 'all') ? (x.children[4].value === cat) : true)
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
