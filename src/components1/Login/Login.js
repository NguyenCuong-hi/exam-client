import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../../services/Login/LoginService';
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import CheckJwt from '../../Authentication/CheckJwt';
const Login = () => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [DataLogin, setDataLogin] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        if (inputUsername == '' || inputPassword == '') {
            console.log('loi');
            return;
        }
        try {
            event.preventDefault();
            setLoading(true);
            const queryStrings = queryString.stringify({
                username: inputUsername,
                password: inputPassword,
            });
            const data = await login(queryStrings);
            console.log(data);
            setDataLogin(data.data.accessToken);
            const tokens = data.data.accessToken;
            localStorage.setItem('assetToken', tokens);

            console.log(CheckJwt());
            setLoading(false);
            navigate('/');
        } catch (e) {
            setLoading(false);
            navigate('/login');
        }
    };

    const handlePassword = () => {};

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <div
            className="sign-in__wrapper"
            style={{
                backgroundImage: `url(https://vcdn1-vnexpress.vnecdn.net/2019/03/30/1-1553960076.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=x9UYS9m_Z9rYLYy4IHhcRw)`,
            }}
        >
            {/* Overlay */}
            <div className="sign-in__backdrop"></div>
            {/* Form */}
            <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
                {/* Header */}
                <img
                    className="img-thumbnail mx-auto d-block mb-2"
                    src="https://vcdn1-vnexpress.vnecdn.net/2019/03/30/1-1553960076.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=x9UYS9m_Z9rYLYy4IHhcRw"
                    alt="logo"
                />
                <div style={{ fontSize: '30px' }} className="h4 mb-2 text-center">
                    Sign In
                </div>
                {/* ALert */}
                {show ? (
                    <Alert className="mb-2" variant="danger" onClose={() => setShow(false)} dismissible>
                        Incorrect username or password.
                    </Alert>
                ) : (
                    <div />
                )}
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label style={{ fontSize: '20px' }}>Username</Form.Label>
                    <Form.Control
                        style={{ fontSize: '18px' }}
                        type="text"
                        value={inputUsername}
                        placeholder="Username"
                        onChange={(e) => setInputUsername(e.target.value)}
                        name="username"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label style={{ fontSize: '20px' }}>Password</Form.Label>
                    <Form.Control
                        style={{ fontSize: '18px' }}
                        type="password"
                        value={inputPassword}
                        placeholder="Password"
                        onChange={(e) => setInputPassword(e.target.value)}
                        name="password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check style={{ fontSize: '17px' }} type="checkbox" label="Remember me" />
                </Form.Group>
                {!loading ? (
                    <Button style={{ fontSize: '20px' }} className="w-100" variant="primary" type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button className="w-100" variant="primary" type="submit" disabled>
                        Logging In...
                    </Button>
                )}
                <div className="d-grid justify-content-end">
                    <Button className="text-muted px-0" variant="link" onClick={handlePassword}>
                        Forgot password?
                    </Button>
                </div>
            </Form>
            {/* Footer */}
            <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
                Made by Hendrik C | &copy;2022
            </div>
        </div>
    );
};

export default Login;
