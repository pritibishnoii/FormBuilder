import { useState } from 'react';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';
import styles from './Nav.module.css';
import closeIcon from '../../assets/closeIcon.png';



function Nav({ handleSave, isShareEnabled, handleShare }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { formId } = useParams();
  const [selected, setSelected] = useState(location.pathname);
  console.log(formId)

  return (
    <>
      <nav className={`${styles.nav} flex justify-between items-center text-white`}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Enter Form Name" className="sans-font text-light-gray" />
        </div>
        <div className={styles.links}>
          <Link
            to="/workspace"
            className={`${styles.link} sans-font ${selected === '/workspace' ? styles.active : ''}`}
            onClick={() => setSelected('/workspace')}
          >
            Flow
          </Link>
          <Link
            to="/theme"
            className={`${styles.link} sans-font ${selected === '/theme' ? styles.active : ''}`}
            onClick={() => setSelected('/theme')}
          >
            Theme
          </Link>
          <Link
            to="/response"
            className={`${styles.link} sans-font ${selected === '/response' ? styles.active : ''}`}
            onClick={() => setSelected('/response')}
          >
            Response
          </Link>
        </div>
        <div className={`${styles.btns} flex items-center`}>
          <button
            className={`${styles.shareBtn} text-white sans-font  ${isShareEnabled ? styles.activeShareButton : ''}`}
            disabled={!isShareEnabled}
            onClick={handleShare}
          >Share</button>
          <button className={`${styles.saveBtn} text-white sans-font`}
            onClick={handleSave}
          >Save</button>
          <div onClick={() => navigate('/dashbord')}>
            <img src={closeIcon} alt="close" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
