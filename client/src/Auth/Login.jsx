import { Card, Input, Typography, Form, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/a-of-a-3d-cartoon-little-boy-in.jpg';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { loading, error, loginUser } = useLogin();

    const handleLogin = (values) => {
        loginUser(values);
    };

    return (
        <div className='body'>
            <Card className='form-container'>
                <div className='flex-container'>
                    <div className='form-content'>
                        <Typography.Title level={3} className='title'>
                            Sign In
                        </Typography.Title>
                        <Typography.Text type='secondary' className='slogan'>
                            Unlock your world!
                        </Typography.Text>
                        <Form
                            layout='vertical'
                            onFinish={handleLogin}
                            autoComplete='off'
                        >
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
                                    {loading ? <Spin /> : 'Sign In'}
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/">
                                    <Button size='large' className='btn'>
                                        Create An Account
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

export default Login;
