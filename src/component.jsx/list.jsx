import React from 'react';

function List(props){
    return(
        <li onClick={()=>{props.done(props.id)}}>{props.list}</li>
    );
}

export default List;