import React, { useState } from 'react';
import '../assets/css/register.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !mobileNumber || !password || !repeatPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');

        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
                name,
                email,
                mobileNumber,
                password
            });

            if (response.status === 200) {
                setRegistered(true);
                
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
       
            <div className="login-container">
                <div className="card1-container">
                    <div className="card-left">
                        <div className="card-body">
                            <h5 className="card-title">Welcome !!</h5>
                            <p className="card-text"> Create an Account and Book Your Boat House</p>
                        </div>
                    </div>
                    <div className="separator-line"></div>
                    <div className="card-right">
                        <h2 >Create an Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input
                                    type="password"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                        {error && <div className="error">{error}</div>}
                        {registered && <div className="alert success">Registered successfully!</div>}
                        <p><Link className='reg' to='/user'>Already have an account? Login</Link></p>
                    </div>
                </div>
            </div>
      
    );
};

export default UserRegister;