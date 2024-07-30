
import FormBot from '../../assets/formbot.png';
import styles from './Navbar.module.css';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className={`${styles.navbar} w-screen`}>
      <div className={`flex justify-center items-center justify-between ` }>   
        <div className={`${styles.navbarBrand} flex items-center`}>
          <img src={FormBot} alt="formBot" className={styles.logoImage} />
          <a href="/" className={styles.logoText}>FormBot</a>
        </div>
        <div className={styles.navbarButtons}>         
          
           <button className={`${styles.button} ${styles.transparentBtn}`} onClick={() => navigate('/signin')}>
          Sign in
        </button>
          <button  className={`${styles.button}  ${styles.bgPrimary}`} onClick={() =>navigate('/signup')}>
            Create a FormBot
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
