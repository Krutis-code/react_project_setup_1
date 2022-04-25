import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userlogin } from '../../redux/actios/UserActions';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const loader = useSelector((state) => state.userReducer.loader);
    useEffect(() => {
        console.log('loaderzzzzzzzzzzzzzzzzzzzzzzzzzzz', loader);
    }, [loader]);

    const onFinish = async (values) => {
        let payload = {
            email: username,
            password: password,
        };
        await dispatch(userlogin(payload));
        Navigate('/home');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div>Login</div>
            {loader ? <Spin></Spin> : ''}
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
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                >
                    <Input.Password />
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
                    <p> eve.holt@reqres.in</p>
                    <p> cityslicka </p>
                    <Button type="primary" htmlType="submit" onClick={onFinish}>
                        {/* <Link to="/home"> */}
                        Submit
                        {/* </Link> */}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;
