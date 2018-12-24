import React, { Component } from 'react';
import '../../assets/css/index.css';

class Test extends Component {
    constructor(props) {
        super(props); // 固定写法

        this.state = {
            msg: "Test Component",
            title: "Test Title",
            username: "hehe"
        }

        // 第二种改变this指向的方式
        this.handleMsg = this.handleMsg.bind(this)
    }

    handleAlert() {
        alert('Alert')
    }

    handleGetData() {
        alert(this.state.msg)
    }

    handleMsg() {
        alert(this.state.msg)
    }

    // 第三种改变this指向的方式
    handleGetName = () => {
        alert('name')
    }

    handleDeliverParams(name) {
        alert(name)
    }

    handleEvent(event) {
        // 获取DOM元素
        alert(event.target)
        // 获取对象属性
        alert(event.target.getAttribute("aid"))
    }

    handleInputChange = (event) => {
        // 第二种获取input值的方式
        let val = this.refs.username.value;

        this.setState({
            // 第一种获取input值的方式
            username: event.target.value
        })

        alert(val)
    }

    handleGetInputValue = () => {
        alert(this.state.username)
    }

    handleKeyUp = (event) => {
        console.log(event.keyCode)

        // 回车键松开
        if (event.keyCode === 13)
        {
            alert(event.target.value)
        }
    }

    handleInputChange2 = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>

                <h2 className='red'>{this.state.title}</h2>

                <button onClick={this.handleAlert}>点我</button>

                {/*// 第一种*/}
                <button onClick={this.handleGetData.bind(this)}>获取数据</button>
                {/*// 第二种*/}
                <button onClick={this.handleMsg}>获取数据</button>
                {/*// 第三种*/}
                <button onClick={this.handleGetName}>获取数据</button>
                {/*// 事件函数传值*/}
                <button onClick={this.handleDeliverParams.bind(this,"aaa")}>传值</button>

                {/*// 事件对象*/}
                <button aid="123" onClick={this.handleEvent.bind(this)}>事件对象</button>
                <br/>
                {/* 获取表单的值
                1. 监听表单的改变事件   onChange
                2. 在改变的事件里面获取表单输入的值  事件对象
                3. 把表单输入的值赋值给username    this.setState()
                4. 点击按钮的时候获取state里面的username   this.state.username
                */}
                <input onChange={this.handleInputChange} /><button onClick={this.handleGetInputValue}>获取输入值</button>
                <br/>
                <input ref="username" onChange={this.handleInputChange} /> <button>获取输入值2</button>
                <br/>
                <h2>键盘事件</h2>
                <input onKeyUp={this.handleKeyUp} />
                <br/>

                <h2>双向数据绑定</h2>
                {/* model改变影响View，view改变反过来影响model */}
                {/*<input defaultValue={this.state.username} />*/}
                <input value={this.state.username} onChange={this.handleInputChange2} />
                <p>{this.state.username}</p>
            </div>
        );
    }
};

export default Test;
