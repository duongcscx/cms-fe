import React, { useEffect, useState } from 'react';
import LoginImage from './login_image.svg';
import './index.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Typography, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthSlice, { AuthState } from '../../redux/auth/auth.slice';
import { LoginRequest } from '../../types/Axios';



export default function index() {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authState = useSelector<{ auth: AuthState }, AuthState>(
    (state) => state.auth,
  );

  const onFinish = (data: LoginRequest) => {
    dispatch(AuthSlice.actions.startLogin(data));
  };

  // useEffect(() => {
  //   authState.
  // }, []);

  useEffect(() => {
    if (authState.loginError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  }, [authState.loginError]);

  useEffect(() => {
    if (authState.authenticated) navigate('/');
  }, [authState.authenticated]);

  return (
    <div className="flex flex-row h-screen w-screen border-8 border-rose-600">
      <div className="flex basis-3/5 bg-gradient-radial from-[#f5f8ff] to-[#e5e9ff] justify-center items-center">
        <img className="flex h-5/9 w-5/9 " src={LoginImage} />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        <span className="Design-APIs-fast-Ma absolute top-0 left-0">
          Design APIs fast, Manage content easily.
        </span>

        <div className="Oval absolute top-0 right-0 rounded-full"></div>
        <div className="Oval-Copy absolute top-0 right-0 rounded-full"></div>
        <div className="Oval-Copy-2 absolute bottom-0 left-0 rounded-full"></div>
        <div className="Oval-Copy-3 absolute bottom-0 left-0 rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center items-center basis-2/5 bg-[#272727]">
        <span className="Login-to-your-CMS-a">Login to your CMS+ account</span>
        <div>
          <Form
            name="login_form"
            className="login-form min-w-[50%]"
            onFinish={onFinish}
          >
            <span className="Email">Email</span>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" />
            </Form.Item>
            <span className="Password">Password</span>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { type: 'string', min: 6 },
              ]}
            >
              <Input type="password" />
            </Form.Item>

            {showError ? (
          <Typography style={{ color: 'red', marginBottom: 10 }}>
            {authState.loginError}
          </Typography>
        ) : (
          <div></div>
        )}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-gradient-radial from-[#633dff] to-[#9d70ff]"
                loading={authState.loginPending}
              >
                Log in
              </Button>
              {/* Or <a href="/signup">register now!</a> */}
            </Form.Item>
          </Form>
        </div>
        <span className="Forgot-password"><u>Forgot password?</u></span>
      </div>
    </div>
  );
}
