import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {RotateSpinner} from 'react-spinners-kit';
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css';


function LoginForm() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);

    //toggle the password visibility
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="header">
                        <p>Sign in to continue</p>
                    </div>


                    <form>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="eyeIcons">
                                {passwordVisible ? (
                                    <BsEyeSlashFill onClick={togglePassword}/>
                                ) : (
                                    <BsEyeFill onClick={togglePassword}/>
                                )}
                            </div>

                            <Link to="/forgot-password" className="forgotPass">
                                Forgot Password?
                            </Link>
                        </div>

                        <button disabled={loggingIn ? true : false} type="submit">
                            {loggingIn ? <RotateSpinner size={30} color="#fff"/> : 'Login'}
                        </button>
                    </form>
                    <Link to="/signup" className="newUser">
                        Don't have an account? - <span>Sign Up</span>
                    </Link>
                </div>
            </div>

            <ToastContainer hideProgressBar autoClose={3000}/>
        </>
    )
}

export default LoginForm;