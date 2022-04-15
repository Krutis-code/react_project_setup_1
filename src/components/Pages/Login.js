import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userlogin } from '../../redux/actios/UserActions';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const Navigate  = useNavigate()

    const onFinish = (values) => {
        let payload = {
            email : username,
            password:password
        }

         dispatch(userlogin(payload))   
        Navigate('/home')

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <div>Login</div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    value={password}  
                        onChange={(e)=>setPassword(e.target.value)}
                    >
                    <Input.Password 
                    
                    />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={onFinish}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}

export default Login