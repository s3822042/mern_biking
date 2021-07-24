import {useState} from 'react';
import {RotateSpinner} from 'react-spinners-kit';
import {Link} from 'react-router-dom';
import {IoChevronBack} from 'react-icons/io5';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './ForgotPassword.css';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [resetting, setResetting] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    return (
        <>
            <div className="forgotPassword">
                <div className="container">
                    <div className="header">
                        <p>{emailSent ? 'Email Sent!' : 'Reset Password'}</p>
                    </div>

                    {emailSent ? (
                        <div className="resentTrue">Please check your email for further instructions.</div>
                    ) : (
                        <form>
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

                            <button disabled={resetting ? true : false} type="submit">
                                {resetting ? <RotateSpinner size={30} color="#fff"/> : 'Send Link'}
                            </button>
                        </form>
                    )}

                    <Link to="/login" className="backToLogin">
                        <IoChevronBack/> Back to Login
                    </Link>
                </div>
            </div>

            <ToastContainer hideProgressBar autoClose={3000}/>
        </>
    )
}

export default ForgotPasswordForm;