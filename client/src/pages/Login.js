import React from 'react';
import '../styles/RegisterStyles.css';
import { Button, Form, Input } from 'antd';
import {Link} from 'react-router-dom';

const Login = () => {

    const onfinishHandler = (values) => {
        console.log(values);
    };

  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
            <h3 className='text-center'>Login Form</h3>
            <Form.Item label="E-mail" name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label="Senha" name="password">
                <Input type="password" required />
            </Form.Item>
            <h6 className='m-2'>Not user <Link to='/register'>Register</Link></h6>
            <Button type="primary" htmlType="submit">Login</Button>
        </Form>
      </div>
    </>
  )
}

export default Login
