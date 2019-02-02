import React from 'react'
import {connect} from 'react-redux'
import SingleItemPage from './SingleItemPage'
import {addItem, removeItem} from "../actions/items";

const SinglePageWrapper = (props) => (
    <div>
        <SingleItemPage
            handleAdd={(item)=>{
                props.dispatch(addItem(item))
            }}
            handleRemove={(id)=>{
                props.dispatch(removeItem(id))
            }}
            id={props.match.params.id}
        />
    </div>
);

export default connect()(SinglePageWrapper);