import React from 'react';

import {compose, graphql, withApollo} from 'react-apollo';
import {Menu, Icon, Spin} from 'antd';

import {setStore} from '../../api/util';
import {originalCategory} from '../../api/graphql/WebResource.graphql';


class OriginalNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '',
            iconTypes: [
                'robot',
                'laptop',
                'project'
            ]
        };
    }


    handleClick = (e) => {
        console.log(1, e.key);
        this.setState({
            current: e.key,
        });
        setStore('originalCategoryId', e.key);
    };

    render() {
        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let originalCategory = this.props.data.originalCategory;

        let current = '';
        if (this.state.current === ''){
            if (originalCategory){
                current = originalCategory[0].id;
                setStore('originalCategoryId', current);
            }
        }

        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current ? this.state.current: current]}
                mode="horizontal"
            >
                {
                    originalCategory.map((value, key) => {
                        return (
                            <Menu.Item key={value.id}>
                                <Icon type={this.state.iconTypes[key]}/>{value.displayName}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        );
    }
};


export default compose(
    withApollo,
    graphql(originalCategory),
)(OriginalNav);
