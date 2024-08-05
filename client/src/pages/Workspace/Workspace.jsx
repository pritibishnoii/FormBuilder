import { useState } from 'react';
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

function Workspace() {
  const [activePopups, setActivePopups] = useState([]);
  const [popupInputs, setPopupInputs] = useState({});
  const [savedData, setSavedData] = useState(null);
  const [isShareEnabled, setIsShareEnabled] = useState(false);
  const [inputErrors, setInputErrors] = useState({});
  const [copyMessage, setCopyMessage] = useState('');

  const popupConfig = {
    bubbleText: { icon: textImg, label: 'Text', inputType: 'text' },
    bubbleImage: { icon: imageIcon, label: 'Image', inputType: 'file' },
    bubbleVideo: { icon: videoIcon, label: 'Video', inputType: 'file' },
    bubbleGif: { icon: gifIcon, label: 'Gif', inputType: 'file' },
    inputText: { icon: textInputIcon, label: 'Text', inputType: 'text' },
    inputNumber: { icon: numberInputIcon, label: 'Number', inputType: 'number' },
    inputEmail: { icon: emailInputIcon, label: 'Email', inputType: 'email' },
    inputPhone: { icon: phoneInputIcon, label: 'Phone', inputType: 'tel' },
    inputDate: { icon: dateInputIcon, label: 'Date', inputType: 'date' },
    inputRating: { icon: ratingIcon, label: 'Rating', inputType: 'number' },
    inputButton: { icon: buttonIcon, label: 'Button', inputType: 'text' }
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
    setInputErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[popupType];
      return newErrors;
    });
  };

  const handleInputChange = (popupType, e) => {
    const { type, value, files } = e.target;

    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [popupType]: false // Reset error on input change
    }));

    if (type === 'file') {
      setPopupInputs((prevInputs) => ({
        ...prevInputs,
        [popupType]: files[0]
      }));
    } else {
      setPopupInputs((prevInputs) => ({
        ...prevInputs,
        [popupType]: value
      }));
    }
  };

  const handleSave = () => {
    const filteredInputs = Object.fromEntries(
      Object.entries(popupInputs).filter(([key, value]) => value)
    );

    if (Object.keys(filteredInputs).length > 0) {
      setSavedData(filteredInputs);
      setIsShareEnabled(true);
      console.log(filteredInputs);
    } else {
      const errors = Object.fromEntries(
        Object.entries(popupInputs).map(([key, value]) => [key, !value])
      );
      setInputErrors(errors);
    }
  };
  const handleShare = () => {
    if (isShareEnabled && savedData) {
      const encodedData = encodeURIComponent(JSON.stringify(savedData));
      const shareLink = `${window.location.origin}/share?data=${encodedData}`;
      navigator.clipboard.writeText(shareLink)
        .then(() => {
          setCopyMessage(' ✔️ Link copied')
          setTimeout(() => setCopyMessage(''), 4000); // Hide message after 3 seconds
        }
        )
        .catch(() => setCopyMessage('failed to copy'));
    }
  };

  return (
    <div className={styles.container}>
      <Nav
        handleSave={handleSave}
        isShareEnabled={isShareEnabled}
        handleShare={handleShare}
      />
      {
        copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>
      }
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
            const { icon, label, inputType } = popupConfig[popupType] || {};
            const isError = inputErrors[popupType];

            return (
              <div key={popupType} className={styles.bubblesBox} style={{ top: `${index * 120}px` }}>
                <img
                  src={deleteIcon}
                  alt="delimg"
                  onClick={() => handleClosePopup(popupType)}
                  className={styles.delIcon}
                />
                <span className={styles.text}>{label || 'Popup'}</span>
                <div className={`${styles.inputBox} ${isError ? styles.errorBorder : ''}`}>
                  <img src={icon} alt={label} />
                  <input
                    type={inputType}
                    placeholder="Click here to edit"
                    value={inputType !== 'file' ? popupInputs[popupType] : undefined}
                    onChange={(e) => handleInputChange(popupType, e)}
                    accept={inputType === 'file' ? `${popupType.includes('Image') ? 'image/*' : popupType.includes('Video') ? 'video/*' : popupType.includes('Gif') ? 'image/gif' : ''}` : undefined}
                    className={isError ? styles.errorBorder : ''}

                  />
                  {isError && <div className={styles.errorText}>This field is required</div>}
                  {inputType === 'file' && popupInputs[popupType] && (
                    <div className={styles.fileName}>{popupInputs[popupType].name}</div>
                  )}

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
