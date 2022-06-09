import React from "react";
import {wrapChildrenWith} from '../../util/common';

class StateProvider extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "Test",
            list: ["1","2"]
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            // actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });

        return <div>{children}</div>;
    }

}

export default StateProvider