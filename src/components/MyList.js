import React from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem'
import ItemModal from './ItemModal'

class MyList extends React.Component {
    state = {
      selectedItem: undefined
    };
    handlePick=()=>{
        this.setState(()=>(
            {
                selectedItem: this.props.items[Math.floor(Math.random()*this.props.items.length)].title
            }
        ))
    };
    handleClear=()=>{
        this.setState(()=>(
            {
                selectedItem: undefined
            }
        ))
    };
    render() {
        return (
            <div>
                {
                    this.props.items.length === 0 ? <p className="textAlert">There are no movies! Go add something!</p> :
                        <div>
                            <button
                                disabled={this.props.items.length === 0}
                                onClick={this.handlePick}
                                className="btn btn-info picker"
                            > WHAT SHOULD I WATCH?
                            </button>
                            {
                                this.props.items.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        item={item}
                                        index={index + 1}
                                    />
                                ))
                            }
                        </div>
                }
                <ItemModal
                    selectedItem={this.state.selectedItem}
                    handleClear={this.handleClear}
                />
            </div>
        );

    }
}

export default connect((state) => ({items: state}))(MyList);