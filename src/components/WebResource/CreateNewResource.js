import React from 'react';
import {compose, graphql, withApollo} from 'react-apollo';
import {Input, Select, Button, message, Spin} from 'antd';

import styles from '../../assets/css/CreateNewResource.css';

import { CreateNetResourceOperation, resourceCategory} from '../../api/graphql/WebResource.graphql';
import {setStore} from "../../api/util";

const {TextArea} = Input;
const Option = Select.Option;

let resourceData = {
    resourceCategoryId: "",
    displayName: "",
    url: "",
    description: ""
};

class CreateNewResource extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelectValueChange = (value) => {
        resourceData.resourceCategoryId = value;
    };

    handleResourceNameChange = (event) => {
        resourceData.displayName = event.target.value
    };

    handleResourceUrlChange = (event) => {
        resourceData.url = event.target.value
    };

    handleResourceDescriptionChange = (event) => {
        resourceData.description = event.target.value
    };

    handleCreateNewResource = (event) => {
        event.preventDefault();
        console.log(resourceData.resourceCategoryId);
        this.props.CreateNetResourceOperation({
                variables: {newData: resourceData}
            })
            .then(async response => {
                message.success("新增资源成功");
                this.props.history.push({
                    pathname: `/NetResourceItem/${resourceData.resourceCategoryId}`
                });
                setStore('categoryId', resourceData.resourceCategoryId);
            })
            .catch(e => {
                message.error("新增资源失败");
            });
    };

    render() {
        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let resourceCategory = this.props.data.resourceCategory;

        return (
            <div className={styles.create}>
                <div style={{width: 480}}>
                    <p>
                        资源类型:
                        <Select style={{width: 160}}
                                defaultValue="请选择资源类型"
                                onChange={this.handleSelectValueChange}
                        >
                            {resourceCategory.map((value, key) => {
                                return <Option id={key} value={value.id}>{value.displayName}</Option>
                            })}
                        </Select>
                    </p>
                    <p>
                        资源名称:
                        <TextArea
                            style={{height: 120}}
                            placeholder="请输入资源名"
                            onChange={this.handleResourceNameChange}
                        >
                        </TextArea>
                    </p>
                    <p>
                        资源链接:
                        <TextArea
                            style={{height: 120}}
                            placeholder="请输入资源链接"
                            onChange={this.handleResourceUrlChange}
                        >
                        </TextArea></p>
                    <p>
                        资源描述:
                        <TextArea
                            style={{height: 120}}
                            placeholder="请输入资源描述"
                            onChange={this.handleResourceDescriptionChange}
                        >
                        </TextArea>
                    </p>
                    <p>
                        <Button onClick={this.handleCreateNewResource}
                                type="primary"
                        >添加资源
                        </Button>
                    </p>
                </div>
            </div>
        );
    }
};

export default compose(
    withApollo,
    graphql(resourceCategory),
    graphql(CreateNetResourceOperation, {name: "CreateNetResourceOperation"})
)(CreateNewResource);
