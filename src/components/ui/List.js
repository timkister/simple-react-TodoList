import React from "react";

import './List.scss';

export default function List(props) {

    const list = props.list

    // return(
    //     <ul>
    //         
    //     </ul>
    // ) 

    return(
        <div id="checklist">
            {list.map(function(item){
                return(
                    [<input id={item} type="checkbox" name="r" value="1" />,<label for={item}>{item}</label>]
                )}
            )}
        </div>
    )
        
}