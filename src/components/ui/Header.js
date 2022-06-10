import React from 'react';

import './Header.css';

export default function Header(props) {

    const name = props.name

    return(
        <h1 className="title">
            {name}
        </h1>
    )
}