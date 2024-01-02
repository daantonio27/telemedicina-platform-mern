import React from 'react';
import '../styles/RegisterStyles.css';
import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
            <Form.Item label="Nome" name="name">
                <Input type="text" required />
            </Form.Item>
            <Form.Item label="E-mail" name="email">
                <Input type="email" required />
            </Form.Item>
            <Form.Item label="Senha" name="password">
                <Input type="password" required />
            </Form.Item>
            <h6 className='m-2'>Already user <Link to='/login'>login</Link></h6>
            <Button type="primary" htmlType="submit">Register</Button>
        </Form>
      </div>
    </>
  )
}

export default Register
