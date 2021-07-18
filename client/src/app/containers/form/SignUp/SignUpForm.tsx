import {useState} from 'react';
import {RotateSpinner} from 'react-spinners-kit';
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs';
import {Link, useHistory} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './SignUp.css';

function SignUpForm() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, seUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [signingIn, setSigningIn] = useState(false);

    //toggle the password visibility
    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="signup">
                <div className="container">
                    <div className="header">
                        <p>Create new account</p>
                    </div>

                    <form>
                        <div className="name">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="john"
                                required
                                value={username}
                                onChange={(e) => seUserName(e.target.value)}
                            />
                        </div>

                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Choose a strong password"
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
                        </div>

                        <button disabled={signingIn ? true : false} type="submit">
                            {signingIn ? <RotateSpinner size={30} color="#fff"/> : 'Create Account'}
                        </button>
                    </form>
                    <Link to="/login" className="oldUser">
                        Already have an account? - <span>Sign In</span>
                    </Link>
                </div>
            </div>

            <ToastContainer hideProgressBar autoClose={3000}/>
        </>
    )
}

export default SignUpForm;