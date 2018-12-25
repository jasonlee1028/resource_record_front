import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

export default class SearchInput extends React.Component {
    render() {
        return (
            <Search
                placeholder="Python"
                style={{padding: 8, width: 200 }}
                onSearch={value => console.log(value)}
            />
        );
    }
}
