import React, { useState } from 'react'
import Button from "./button"
const Input = (props)=>{
    const [item,setItem] = useState("");
    const handleOnChange =(event)=>{
        const newItem = event.target.value;
        setItem(newItem);
    }

    return(
        <>
        <input onChange={handleOnChange} type="text" name={props.name} value = {item} placeholder={props.placeholder}/>
        <Button fun = {props.onAdd} addedItem = {item} fun1 = {setItem} purpose = {props.buttonPurpose}/>
        </>
    );
}

export default Input;