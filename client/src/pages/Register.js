import React from 'react';
import '../styles/RegisterStyles.css';
import { Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //form handler
    const onfinishHandler = async (values) => {
        try {
          dispatch(showLoading());
          const res = await axios.post('/api/v1/user/register', values);
          dispatch(hideLoading());
          if(res.data.success){
            message.success('Register Successfully!');
            navigate("/login");
          }else{
            message.error(`Error: ${res.data.message}`);
          }
        } catch (error) {
          dispatch(hideLoading());
          console.log(error)
          message.error('Something went wrong')
        }
    };

  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
            <h3 className='text-center'>Register Form</h3>
            <Form.Item label="Nome" name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="nome" type="text" />
            </Form.Item>
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
            <button className="btn btn-primary" variant="contained" type="primary" htmlType="submit" style={{ width: '100%' }}>
              Registe-se
            </button>
          </Form.Item>
          <div>
            <h6 className='m-2'>Já é utilizador <Link to="/login">login</Link></h6>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register
