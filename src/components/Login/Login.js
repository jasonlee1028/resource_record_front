import React, {Component} from "react";
import {Form, Icon, Input, Button, message} from "antd";
import styles from "../../assets/css/Login.css";
import {withRouter} from "react-router-dom";
import {compose, graphql, withApollo} from "react-apollo";
import {setStore} from "../../api/util";
import {TokenLogin} from "../../api/graphql/Common.graphql";

const FormItem = Form.Item;

@Form.create()
@withRouter
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({loading: true});
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props
                    .TokenLogin({
                        variables: values
                    })
                    .then(async response => {
                        if (response.data.tokenAuth) {
                            setStore("token", response.data.tokenAuth.token);
                            message.success("登录成功");
                            this.props.history.push("/");
                        } else {
                            message.warning("用户名或密码错误");
                            this.setState({loading: false});
                        }
                    })
                    .catch(e => {
                        message.error("用户名或密码错误");
                        this.setState({loading: false});
                    });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={styles.wrap}>
                <div className={styles.form}>
                    <h2>欢迎来到Jason Lee的个人空间</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator("username", {
                                rules: [
                                    {required: true, message: "Please input your username!"}
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator("password", {
                                rules: [
                                    {required: true, message: "Please input your Password!"}
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                className={styles.btn}
                                loading={this.state.loading}
                            >
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default compose(
    withApollo,
    graphql(TokenLogin, {name: "TokenLogin"})
)(Login);
