import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'


class SingleItemPage extends React.Component {
    state = {
        isLoading: false,
        result: {}
    };

    async componentDidMount() {
        this.setState({isLoading: true});
        const request = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=35bdfd8ec0dcd70c85336a22a5b55f5a&language=en-US`;
        try {
            const result = await axios.get(request);

            this.setState({
                result: result.data,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    render() {
        return (
            <div className="row">
                {this.state.isLoading && <p className="textAlert"> Loading ...</p>}
                <div className="col-md-5">
                    <img alt="poster"
                         src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.result.poster_path}`}/>
                </div>
                <div className="col-md-7">
                    <h3>{this.state.result.title}</h3>
                    <p>Release date: {this.state.result.release_date}</p>
                    <p>Rating: {this.state.result.vote_average}</p>
                    <p>Overview:</p>
                    <p>{this.state.result.overview}</p>
                    {this.props.items.some(e => e.id === this.state.result.id) ?
                        <button className="btn btn-danger" onClick={() => {
                            this.props.handleRemove(this.state.result.id);
                        }}>Remove </button> :
                        <button className="btn btn-success" onClick={() => {
                            this.props.handleAdd(this.state.result);
                        }
                        }>Add </button>
                    }
                </div>
            </div>
        );
    }

}

export default connect((state) => ({items: state}))(SingleItemPage);