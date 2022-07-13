import React, { useState } from "react";
import Heading from "./heading";
import Input from "./input";
import List from "./list";

function Box(){     
    const [listItem,setListItem] = useState([]);
    const add = (newItem,setNewItem)=>{
        if(newItem.length){
            setListItem((prev) =>{
                return [...prev,newItem]
            })
            setNewItem("");
        }
    }
    const deleteList = (id)=>{
        setListItem(prev=>{
            return prev.filter((element,index) =>{
                return index !== id;
            })
        })
    }
    return(
        <div className="out">
            <div className="box">
                <Heading heading ="To-Do List"/>
                <div className="insub">
                    <Input name = "newitem" placeholder = "Add New Item" onAdd = {add} buttonPurpose  = "Add"/>
                    {listItem.map((element,index)=>{
                        return(<List list ={element} done = {deleteList} key = {index} id = {index} />);
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default Box;