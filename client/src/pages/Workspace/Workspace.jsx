import styles from './Workspace.module.css';
import Nav from '../../Components/Nav/Nav';

import startIcon from '../../assets/start.png';
import textImg from '../../assets/text-img.png';
import imageIcon from '../../assets/image-icon.png';
import videoIcon from '../../assets/vedio-img.png';
import gifIcon from '../../assets/gif.png';
import textInputIcon from '../../assets/Text.png';
import numberInputIcon from '../../assets/number.png';
import emailInputIcon from '../../assets/email.png';
import phoneInputIcon from '../../assets/phone.png';
import dateInputIcon from '../../assets/date.png';
import ratingIcon from '../../assets/star.png';
import buttonIcon from '../../assets/btnimg.png';
import deleteIcon from '../../assets/deleteIcon.png';

import { useState } from 'react';

function Workspace() {
  const [activePopups, setActivePopups] = useState([]);
  const [popupInputs, setPopupInputs] = useState({}); // Store input for each popup

  // Map popup types to their respective icons and labels
  const popupConfig = {
    bubbleText: { icon: textImg, label: 'Text' },
    bubbleImage: { icon: imageIcon, label: 'Image' },
    bubbleVideo: { icon: videoIcon, label: 'Video' },
    bubbleGif: { icon: gifIcon, label: 'Gif' },
    inputText: { icon: textInputIcon, label: 'Text' },
    inputNumber: { icon: numberInputIcon, label: 'Number' },
    inputEmail: { icon: emailInputIcon, label: 'Email' },
    inputPhone: { icon: phoneInputIcon, label: 'Phone' },
    inputDate: { icon: dateInputIcon, label: 'Date' },
    inputRating: { icon: ratingIcon, label: 'Rating' },
    inputButton: { icon: buttonIcon, label: 'Button' }
  };

  const handleOpenPopup = (popupType) => {
    setActivePopups((prevPopups) => [...prevPopups, popupType]);
    setPopupInputs((prevInputs) => ({
      ...prevInputs,
      [popupType]: ''
    }));
  };

  const handleClosePopup = (popupType) => {
    setActivePopups((prevPopups) => prevPopups.filter(popup => popup !== popupType));
    setPopupInputs((prevInputs) => {
      const newInputs = { ...prevInputs };
      delete newInputs[popupType];
      return newInputs;
    });
  };

  const handleInputChange = (popupType, e) => {
    const { value } = e.target;
    setPopupInputs((prevInputs) => ({
      ...prevInputs,
      [popupType]: value
    }));
  };

  const handleSave = () => {

  };

  return (
    <div className={styles.container}>
      <Nav handelSave={handleSave} />

      <div className={styles.main}>
        <div className={`${styles.startImg} sans-font flex`}>
          <img src={startIcon} alt="Start" /> Start
        </div>
        <div className={`${styles.sideBar} flex flex-col text-white sans-font`}>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Bubbles</h1>
            <div className={styles.Container}>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('bubbleText')}
              >
                <img src={textImg} alt="text" />
                Text
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('bubbleImage')}
              >
                <img src={imageIcon} alt="img" />
                Image
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('bubbleVideo')}
              >
                <img src={videoIcon} alt="video" />
                Video
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('bubbleGif')}
              >
                <img src={gifIcon} alt="gif" />
                Gif
              </button>
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Inputs</h1>
            <div className={styles.Container}>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputText')}
              >
                <img src={textInputIcon} alt="text" />
                Text
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputNumber')}
              >
                <img src={numberInputIcon} alt="num" />
                Number
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputEmail')}
              >
                <img src={emailInputIcon} alt="email" />
                Email
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputPhone')}
              >
                <img src={phoneInputIcon} alt="phone" />
                Phone
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputDate')}
              >
                <img src={dateInputIcon} alt="date" />
                Date
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputRating')}
              >
                <img src={ratingIcon} alt="rating" />
                Rating
              </button>
              <button
                className={styles.box}
                onClick={() => handleOpenPopup('inputButton')}
              >
                <img src={buttonIcon} alt="button" />
                Button
              </button>
            </div>
          </div>
        </div>

        {/* Render the popups */}
        <div className={styles.popupsContainer}>
          {activePopups.map((popupType, index) => {
            const { icon, label } = popupConfig[popupType] || {};
            return (
              <div key={popupType} className={styles.bubblesBox} style={{ top: `${index * 120}px` }}>
                <img
                  src={deleteIcon}
                  alt="delimg"
                  onClick={() => handleClosePopup(popupType)}
                  className={styles.delIcon}
                />
                <span className={styles.text}>{label || 'Popup'}</span>
                <div className={`${styles.inputBox}`}>
                  <img src={icon} alt={label} />
                  <input
                    type="text"
                    placeholder="Click here to edit"
                    value={popupInputs[popupType] || ''}
                    onChange={(e) => handleInputChange(popupType, e)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Workspace;
