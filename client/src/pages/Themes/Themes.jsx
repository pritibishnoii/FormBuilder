import React, { useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import LightTheme from '../../assets/lightThem.png';
import DarkTheme from '../../assets/DarkTheme.png';
import BlueTheme from '../../assets/blueTheme.png';
import styles from './Themes.module.css';

function Themes() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Nav />
      <div className={ `${styles.main} flex `}>
      <div className={styles.themeContainer}>
        <div className={styles.heading}>
          <h1 className='sans-font text-white'>Customize the theme</h1>
        </div>
        <div className={styles.themeOption}>
          <img 
            src={LightTheme} 
            alt="Light Theme"
            onClick={() => handleThemeChange('light')} 
          />
        </div>
        <div className={styles.themeOption}>
          <img 
            src={DarkTheme} 
            alt="Dark Theme"
            onClick={() => handleThemeChange('dark')} 
          />
        </div>
        <div className={styles.themeOption}>
          <img 
            src={BlueTheme} 
            alt="Blue Theme"
            onClick={() => handleThemeChange('blue')} 
          />
        </div>
      </div>

      <div className={styles.chatBg}>
        <button className={`${styles.leftBtn} ${styles.btn}`}>hello</button>
        <div className={styles.dot}></div>
        <button className={`${styles.rightBtn} ${styles.btn}`}>hi</button>
      </div>
     </div>
    </div>
  );
}

export default Themes;
