import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { MailOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container" 
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', height: '100vh'
      }}
    >
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="E-mail" name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="e-mail" type="email" />
        </Form.Item>
        <Form.Item label="Palavra-passe" name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Palavra-passe" type="password" />
        </Form.Item>
        <Form.Item>
          <button className="btn btn-primary" variant="contained" type="submit" style={{ width: '100%' }}>
            Iniciar sessão
          </button>
        </Form.Item>
        <div>
          <h6 className='m-2'>Não é um utilizador <Link to="/register">Registe-se</Link></h6>
        </div>
      </Form>
    </div>
  );
};

export default Login;