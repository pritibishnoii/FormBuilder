import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Login } from '../../api/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUp.module.css';
import backArrow from '../../assets/arrow_back.png';
import { useDispatch } from 'react-redux';
import { setUserLogedIn } from '../../redux/Reducer/userSlice';
import Img from '../../assets/login-signup.png'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);


        } if (name === 'password') {
            setPassword(value);

        }
    };

    const validate = () => {
        const errors = {};
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
        return errors;
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                setLoading(true)
                const response = await Login({ email, password });
                console.log(response);

                if (response.status === 200) {
                    setLoading(false)
                    toast.success('Login successful');
                    setEmail('')
                    setPassword('')
                    setTimeout(() => {

                        console.log(setUserLogedIn({ email: response.data.userData.email }));
                        dispatch(setUserLogedIn(response.data.userData));
                        navigate('/dashbord');
                    }, 3000);
                    //redux state update
                    localStorage.setItem("token", response.data.token);   //  token
                    localStorage.setItem("userData", JSON.stringify(response.data.userData)); //userName


                } else {
                    setLoading(false)
                    setErrors({ general: 'Password or Email are incorrect' });
                    toast.error('Password or Email are incorrect');
                }
            } catch (error) {
                setLoading(false)
                console.error('Login error:', error);
                setErrors({ general: 'Login failed due to a server error' });
                toast.error('Login failed due to a server error');
            }
        }
    };



    return (
        <>
            <div className={`${styles.page} flex items-center justify-center    `}>
                <ToastContainer />

                <div className={styles.backArrow} onClick={() => window.history.back()}>
                    <img src={backArrow} alt="back" />
                </div>
                <div className={`${loading ? 'loader' : ''} `}></div>

                <form onSubmit={loginHandler} className={`flex flex-col ${styles.form_w}`}>
                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.email ? styles.error : ''}`}
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="**********"
                            value={password}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.password ? styles.error : ''}`}
                        />
                        {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                    </div>
                    <div>
                        <button type="submit" className={`${styles.submitButton}  `}
                        >Log In</button>
                        {errors.general && <span className={styles.errorMessage}>{errors.general}</span>}
                        <p className={styles.para}>
                            <span>Don't have an account? </span>
                            <span><Link to="/signup">Register now</Link></span>
                        </p>
                    </div>
                </form>
                <div style={{ backgroundImage: `url(${Img})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 90%", backgroundPosition: "bottom", position: "absolute", zIndex: -1, left: 0, bottom: 0, width: "100%", height: "90%" }} />
            </div>

        </>
    );
}

export default SignIn;
