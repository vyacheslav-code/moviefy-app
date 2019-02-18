import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {addItem, removeItem} from "../actions/items";


export default connect((state)=>({items: state}))((props) =>(
        <div className="listItem row">
            <div className="col-md-2">
           <img className="listItemPoster" alt="poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.item.poster_path}`}/>
            </div>
            <div className="col-md-10">
                <Link className="listItemTitle" to={`/movie/${props.item.id}`}>
                    {props.item.title}
                </Link>
                <br/>
             Rating: {props.item.vote_average}
            {props.items.some(e => e.id === props.item.id) ?
                <button className="btn btn-danger btn-block" onClick={()=>{
                    props.dispatch(removeItem(props.item.id));
                }}>Remove </button> :
                <button className="btn btn-primary btn-block" onClick={()=>{
                   props.dispatch(addItem(props.item));
                }
                }>Add </button>
            }
            </div>
        </div>
));


