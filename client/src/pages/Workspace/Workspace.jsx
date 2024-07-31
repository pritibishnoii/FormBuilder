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

const bubbleButtons = [
  { id: 'Text', src: textImg, text: "Text" },
  { id: 'Image', src: imageIcon, text: "Image" },
  { id: 'Video', src: videoIcon, text: "Video" },
  { id: 'GIF', src: gifIcon, text: "GIF" }
];

const inputButtons = [
  { id: 'Text', src: textInputIcon, text: "Text" },
  { id: 'Number', src: numberInputIcon, text: "Number" },
  { id: 'Email', src: emailInputIcon, text: "Email" },
  { id: 'Phone', src: phoneInputIcon, text: "Phone" },
  { id: 'Date', src: dateInputIcon, text: "Date" },
  { id: 'Rating', src: ratingIcon, text: "Rating" },
  { id: 'Buttons', src: buttonIcon, text: "Buttons" }
];

function Workspace() {
  const [openInputs, setOpenInputs] = useState([]);
  const [error, setError] = useState({});
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e, id) => {
    const { value } = e.target;
    setInputValues(prev => ({ ...prev, [id]: value }));
    setError(prev => ({ ...prev, [id]: value.trim() === '' }));
  };

  const handleSave = () => {
    let hasError = false;
    Object.keys(inputValues).forEach(key => {
      if (inputValues[key].trim() === '') {
        setError(prev => ({ ...prev, [key]: true }));
        hasError = true;
      }
    });
    if (!hasError) {

    }
  };

  const handleButtonClick = (id, type) => {
    setOpenInputs(prev => [...prev, { id, type }]);
  };

  const handleDeleteInput = (id) => {
    setOpenInputs(prev => prev.filter(input => input.id !== id));
    setInputValues(prev => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  const renderInputBox = (type, id) => {
    switch (type) {
      case 'Text':
        return (
          <input
            type="text"
            placeholder="Click here to edit"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Image':
        return (
          <input
            type="file"
            accept="image/*"
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Video':
        return (
          <input
            type="file"
            accept="video/*"
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'GIF':
        return (
          <input
            type="file"
            accept="image/gif"
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Number':
        return (
          <input
            type="number"
            placeholder="Enter number"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Email':
        return (
          <input
            type="email"
            placeholder="Enter email"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Phone':
        return (
          <input
            type="tel"
            placeholder="Enter phone number"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Date':
        return (
          <input
            type="date"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Rating':
        return (
          <input
            type="range"
            min="1"
            max="5"
            value={inputValues[id] || ''}
            onChange={e => handleInputChange(e, id)}
          />
        );
      case 'Buttons':
        return (
          <button onClick={() => alert('Button clicked!')}>Click me</button>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Nav handleSave={handleSave} />

      <div className={styles.main}>
        <div className={`${styles.startImg} sans-font flex`}>
          <img src={startIcon} alt="Start" /> Start
        </div>
        <div className={`${styles.sideBar} flex flex-col text-white sans-font`}>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Bubbles</h1>
            <div className={styles.Container}>
              {bubbleButtons.map(button => (
                <button
                  className={styles.box}
                  key={button.id}
                  id={button.id}
                  onClick={() => handleButtonClick(button.id, button.text)}
                >
                  <img src={button.src} alt={button.text} /> {button.text}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Inputs</h1>
            <div className={styles.Container}>
              {inputButtons.map(button => (
                <button
                  className={styles.box}
                  key={button.id}
                  id={button.id}
                  onClick={() => handleButtonClick(button.id, button.text)}
                >
                  <img src={button.src} alt={button.text} /> {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {openInputs.map(({ id, type }, index) => (
          <div className={styles.bubblesBox} key={index}>
            <img
              src={deleteIcon}
              alt="Delete"
              onClick={() => handleDeleteInput(id)}
              className={styles.delIcon}
            />
            <span className={styles.text}>{type}</span>
            <div className={`${styles.inputBox} ${error[id] ? styles.error : ''}`}>
              {renderInputBox(type, id)}
              <span className={error[id] ? styles.errorText : styles.displayNone}>
                Required Field
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workspace;
