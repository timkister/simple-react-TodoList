import React from "react";

export default function List(props) {

    const list = props.list

    return(
        <ul>
            {list.map(function(item){
                return <li>{item}</li>}
            )}
        </ul>
    ) 
        
}