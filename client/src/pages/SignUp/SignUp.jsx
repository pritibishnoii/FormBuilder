import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Login, Register } from '../../api/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '.././SignIn/SignUp.module.css';
import backArrow from '../../assets/arrow_back.png';
import Img from '../../assets/login-signup.png';


function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
    };

    const validate = () => {
        const errors = {};
        if (!name) errors.name = 'Username is required';
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Enter the same password in both fields';
        }
        return errors;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }
        setValidationErrors({});

        try {
            setLoading(true)
            const response = await Register({ name, email, password });
            if (response.status === 201) {
                setLoading(false)
                const loginResponse = await Login({ email, password });

                if (loginResponse.status === 200) {
                    const { data } = loginResponse;
                    const { token } = data;
                    localStorage.setItem('token', token);
                    toast.success("Registration successful!");
                    setTimeout(() => {
                        navigate("/signin");
                    }, 2000);

                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                if (error.response.data.message === 'User already exists, please use another email address') {
                    setLoading(false)
                    toast.error("User already exists, please use another email address.");
                } else {
                    setLoading(false)
                    toast.error("An error occurred. Please try again later.");
                }
            } else {
                setLoading(false)
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className={`${styles.page} flex items-center justify-center`}>
            <div className={styles.backArrow} onClick={() => window.history.back()}>
                <img src={backArrow} alt="back" />
            </div>
            <div className={`${loading ? 'loader' : ''} `}></div>
            <form onSubmit={handleRegister} className={`flex flex-col ${styles.form_w}`}>
                <div className={` ${styles.inputGroup} `}>
                    <label>Username</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter a username"
                        value={name}
                        onChange={handleChange}
                        className={`${styles.input} ${validationErrors.name ? styles.error : ''}`}
                    />
                    {validationErrors.name && <p className={styles.errorMessage}>{validationErrors.name}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        className={`${styles.input} ${validationErrors.email ? styles.error : ''}`}
                    />
                    {validationErrors.email && <p className={styles.errorMessage}>{validationErrors.email}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handleChange}
                        className={`${styles.input} ${validationErrors.password ? styles.error : ''}`}
                    />
                    {validationErrors.password && <p className={styles.errorMessage}>{validationErrors.password}</p>}
                </div>
                <div className={styles.inputGroup}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleChange}
                        className={`${styles.input} ${validationErrors.confirmPassword ? styles.error : ''}`}
                    />
                    {validationErrors.confirmPassword && <p className={styles.errorMessage}>{validationErrors.confirmPassword}</p>}
                </div>

                <button type="submit" className={styles.submitButton}>Sign Up</button>
                <p className={styles.para}>Already have an account? <Link to="/signin">Login</Link></p>
            </form>
            <ToastContainer />
            <div style={{ backgroundImage: `url(${Img})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 90%", backgroundPosition: "bottom", position: "absolute", zIndex: -1, left: 0, bottom: 0, width: "100%", height: "90%" }} />
        </div>
    );
}

export default SignUp;
