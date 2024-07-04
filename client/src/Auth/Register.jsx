import { Card, Input, Typography, Form, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/a-of-a-3d-cartoon-little-boy-in.jpg';
import useSignup from '../hooks/useSignup'; // Assuming the correct path

const Register = () => {
    const { loading, error, registerUser } = useSignup();

    const handleRegister = (values) => {
        registerUser(values);
    };

    return (
        <div className='body'>
            <Card className='form-container'>
                <div className='flex-container'>
                    <div className='form-content'>
                        <Typography.Title level={3} className='title'>
                            Create an account
                        </Typography.Title>
                        <Typography.Text type='secondary' className='slogan'>
                            Join for exclusive access!
                        </Typography.Text>
                        <Form
                            layout='vertical'
                            onFinish={handleRegister}
                            autoComplete='off'
                        >
                            <Form.Item
                                label="Full Name"
                                name="name"
                                rules={[{
                                    required: true,
                                    message: 'Please input your full name'
                                }]}
                            >
                                <Input placeholder='Enter your full name' />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!'
                                    },
                                    {
                                        type: "email",
                                        message: "The input is not valid Email!"
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='Enter your email' />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{
                                    required: true,
                                    message: 'Please input your password'
                                }]}
                            >
                                <Input.Password size='large' placeholder='Enter your Password' />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="passwordConfirm"
                                rules={[{
                                    required: true,
                                    message: 'Please input your confirm password'
                                }]}
                            >
                                <Input.Password size='large' placeholder='Re-enter your Password' />
                            </Form.Item>

                            {error && (
                                <Alert
                                    description={error}
                                    type='error'
                                    showIcon
                                    closable
                                    className='alert'
                                />
                            )}

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size='large'
                                    className='btn'
                                    disabled={loading}
                                >
                                    {loading ? <Spin /> : 'Create Account'}
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/login">
                                    <Button size='large' className='btn'>
                                        Sign In
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className='image-container'>
                        <img src={logo} alt="sidelogo" className='auth-image' />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Register;
