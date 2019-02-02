import React from 'react'
import ListItem from './ListItem'
import axios from "axios";
import {addItem , removeItem} from  '../actions/items'


const key = '35bdfd8ec0dcd70c85336a22a5b55f5a';
export default class SearchPage extends React.Component{
    state = {
        notSearching: true,
        isLoading: false,
        result: []
    };

    handleSearch = async (e) => {
        e.preventDefault();
        const query = e.target.elements.search.value.trim();
        const request = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&include_adult=true`;
       this.setState({ isLoading: true, notSearching: false });
       try {
           const result = await axios.get(request);

           this.setState({
               result: result.data.results,
               isLoading: false
           });
       } catch (error) {
           this.setState({
               error,
               isLoading: false
           });
       }
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <input type="text" name="search"/>
                    <button>Search</button>
                </form>
                {this.state.notSearching ? <p className="textAlert">Search movies by title</p> :
                    (this.state.isLoading ? <p className="textAlert">Loading</p> :
                    this.state.result.map((item, index) => (
                        <ListItem
                            key={index}
                            item={item}
                            index={index+1}
                            handleAdd={(item) => {
                                this.props.dispatch(addItem(item));
                            }}
                            handleRemove={(id) => {
                                this.props.dispatch(removeItem(id));
                            }}
                        />
                    ))
                    )
                }
            </div>
        );
    }
}

