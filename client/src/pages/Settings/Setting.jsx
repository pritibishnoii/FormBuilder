import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import usericon from '../../assets/user.png';
import lockicon from '../../assets/lock.png';
import logouticon from '../../assets/logout.png';
import styles from './Setting.module.css';
import { logout } from '../../redux/Reducer/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backArrow from '../../assets/arrow_back.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { updateUser } from '../../api/user';

function Setting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const userData = JSON.parse(localStorage.getItem('userData')); // Retrieve userId from local storage
    const userID = userData ? userData.userID : null;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await updateUser(name, email, newPassword, oldPassword, userID);
            // toast.success("User updated successfully!");
            console.log(response)
            setLoading(false)
            toast.success("User updated successfully!!");
            setEmail('')
            setName('')
            setNewPassword('')
            setOldPassword('')
        } catch (error) {
            setLoading(false)
            console.error("Error updating user:", error);
            toast.error(error.message || "Error updating user.");
        }
    };

    return (
        <div className={`${styles["settings-page"]} flex flex-col items-center`} >
            <div className={styles.backArrow} onClick={() => window.history.back()}>
                <img src={backArrow} alt="back" />
            </div>
            <h1 className={`${styles["settings-title"]} text-white text-center sans-font`}>Settings</h1>
            <div className={`${loading ? 'loader' : ''} `}></div>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={`${styles['input-div']} flex items-center`}>
                    <img src={usericon} alt="userImg" />
                    <input
                        className={`${styles["input-box"]} text-white`}
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={`${styles['input-div']} flex items-center`}>
                    <img src={lockicon} alt="LockImg" />
                    <input
                        className={`${styles["input-box"]} text-white`}
                        type="email"
                        placeholder="Update Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={`${styles['input-div']} flex items-center`}>
                    <img src={lockicon} alt="" />
                    <input
                        className={`${styles["input-box"]} text-white`}
                        placeholder="Old Password"
                        type={showOldPassword ? "text" : "password"}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <div onClick={() => setShowOldPassword(!showOldPassword)} style={{ cursor: 'pointer' }}>
                        {showOldPassword ? <FiEye className={styles.eyeicon} /> : <FiEyeOff className={styles.eyeicon} />}
                    </div>
                </div>
                <div className={`${styles['input-div']} flex items-center`}>
                    <img src={lockicon} alt="" />
                    <input
                        className={`${styles["input-box"]} text-white`}
                        placeholder="New Password"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <div onClick={() => setShowNewPassword(!showNewPassword)} style={{ cursor: 'pointer' }}>
                        {showNewPassword ? <FiEye className={styles.eyeicon} /> : <FiEyeOff className={styles.eyeicon} />}
                    </div>
                </div>
                <div>
                    <button
                        className={`${styles["update-button"]} text-white`} type="submit">Update</button>
                </div>
            </form>
            <div className={styles['logout-box']}>
                <img src={logouticon} alt="" />
                <button
                    className={styles['logout-text']}
                    onClick={() => {
                        dispatch(logout());
                        navigate('/signin');
                    }}
                >
                    Logout
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Setting;
