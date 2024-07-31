import { useState } from 'react'
import { logout } from '../../redux/Reducer/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './DropdownBox.module.css'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";




const DropdownMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const userName = useSelector((state) => state.user.data?.userName);
    const folderToDelete = useSelector((state) => state.folder.folderToDelete)
    console.log(folderToDelete)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles['folder-drop-down']} flex flex-start justify-center`}>
                {/* Dropdown section */}
                <div className={`${styles.dropdown} flex justify-center`}>
                    <button className={`${styles.dropdownSelect} flex items-center justify-between text-white sans-font`}
                        onClick={() => setDropdownOpen(!isDropdownOpen)}>
                        {userName}
                        {isDropdownOpen ? (
                            <IoIosArrowUp className={styles.arrow} />
                        ) : (
                            <IoIosArrowDown className={styles.arrow} />
                        )}
                    </button>
                    {isDropdownOpen && (
                        <div className={`${styles.listItem} flex flex-col`}>
                            <Link to="/setting" className={` ${styles.settings} text-white sans-font`}>Settings</Link>
                            <button
                                onClick={() => {
                                    dispatch(logout());
                                    navigate('/signin');
                                }}
                                className={`${styles.logOut} sans-font`}>Log Out</button>
                        </div>
                    )}
                </div>
            </div>
            <hr style={{ width: '100%', backgroundColor: '#6d6d6d', height: '1px', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', marginTop: '12px' }} />
        </>
    )
}
export default DropdownMenu