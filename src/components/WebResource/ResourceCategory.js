import React, { Component } from 'react';

class ResourceCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: []
        }
    }

    componentWillMount() {
        this.setState({
            category: [
                {
                    id: 1,
                    name: "c1",
                    displayName: "类型一"
                },
                {
                    id: 2,
                    name: "c1",
                    displayName: "类型二"
                },
                {
                    id: 3,
                    name: "c1",
                    displayName: "类型三"
                },
            ]
        })
    }

    render() {
        return (
            <div>
                {this.state.category.map((value, key) => {
                    return <li key={key}>{value.displayName}</li>
                })}
            </div>
        );
    }
}

export default ResourceCategory;
