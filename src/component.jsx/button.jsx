import React from 'react';
const Button = (props)=>{
    return(
        <button onClick={()=>{props.fun(props.addedItem,props.fun1)}}>{props.purpose}</button>
    );
}

export default Button;