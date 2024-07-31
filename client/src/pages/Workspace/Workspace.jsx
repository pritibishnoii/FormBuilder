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
import deleteIcon from '../../assets/deleteIcon.png'

import { useState } from 'react';



// const bubbleButtons = [
//   { id: 'bt', src: textImg, text: "Text" },
//   { id: 'bi', src: imageIcon, text: "Image" },
//   { id: 'bv', src: videoIcon, text: "Video" },
//   { id: 'bg', src: gifIcon, text: "GIF" }
// ];

// const inputButtons = [
//   { src: textInputIcon, text: "Text" },
//   { src: numberInputIcon, text: "Number" },
//   { src: emailInputIcon, text: "Email" },
//   { src: phoneInputIcon, text: "Phone" },
//   { src: dateInputIcon, text: "Date" },
//   { src: ratingIcon, text: "Rating" },
//   { src: buttonIcon, text: "Buttons" }
// ];

function Workspace() {

  const [openBubbleButtons, setOpenBubbleButtons] = useState([])
  const [openInputButtons, setOpenInputButtons] = useState(false)
  const [error, setError] = useState(false)
  const [bubbleInput, setBubbleInput] = useState('')
  const [textInput, setTextInput] = useState('')




  const handleInput = (e) => {
    const { value } = e.target;
    setBubbleInput(value);
    if (value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handelTextInput = (e) => {
    const { value } = e.target
    setTextInput(value)
    if (value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  }
  const handelSave = () => {
    if (bubbleInput.trim() === '' || textInput.trim() === '') {
      setError(true);
      setBubbleInput('');
      setTextInput('')
    }

    else {
      setError(false);
      // Save logic here
    }

  };


  const handelBubbleButtons = (id) => {
    setOpenBubbleButtons(true)
  }

  return (
    <div className={styles.container}>
      <Nav handelSave={handelSave} />

      <div className={styles.main}>
        <div className={`${styles.startImg} sans-font flex`}>
          <img src={startIcon} alt="Start" /> Start
        </div>
        <div className={`${styles.sideBar} flex flex-col text-white sans-font`}>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Bubbles</h1>
            <div className={styles.Container}>
              <button className={styles.box}
                onClick={() => handelBubbleButtons()}>
                <img src={textImg} alt="text" />
                Text
              </button>
              <button className={styles.box}
                onClick={() => handelBubbleButtons()}>
                <img src={textImg} alt="text" />
                Image
              </button>
              <button className={styles.box}
                onClick={() => handelBubbleButtons()}>
                <img src={videoIcon} alt="vedio" />
                Vedio
              </button>
              <button className={styles.box}
                onClick={() => handelBubbleButtons()}>
                <img src={gifIcon} alt="git" />
                Gif
              </button>

            </div>
          </div>
          <div className={styles.sectionContainer}>
            <h1 className={styles.headings}>Inputs</h1>
            <div className={styles.Container}>

              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={textInputIcon} alt="text" />
                Text
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={numberInputIcon} alt="num" />
                Number
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={emailInputIcon} alt="email" />
                Email
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={phoneInputIcon} alt="phone" />
                Phone
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={dateInputIcon} alt="date" />
                Date
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={ratingIcon} alt="rating" />
                Rating
              </button>
              <button className={styles.box}
                onClick={() => setOpenInputButtons(true)}
              >
                <img src={buttonIcon} alt="button" />
                Button
              </button>

            </div>
          </div>
        </div>


        {
          openBubbleButtons && (
            <div className={styles.bubblesBox}>
              <img src={deleteIcon} alt="delimg" onClick={() => setOpenBubbleButtons(false)}
                className={styles.delIcon}
              />
              <span className={styles.text}>Text</span>
              <div className={`${styles.inputBox} ${error ? styles.error : ''} `}>
                <img src={textImg} alt="" />
                <input
                  type="text"
                  placeholder='Click here to edit'
                  value={bubbleInput}
                  onChange={handleInput}
                />
                <span className={error ? styles.errorText : styles.displayNone} > Required Field</span>
              </div>
            </div>
          )
        }
        {
          openInputButtons && (
            <div className={styles.bubblesBox}>
              <img src={deleteIcon} alt="del" onClick={() => setOpenInputButtons(false)}
                className={styles.delIcon}
              />
              <span className={styles.text}>Text</span>
              <div className={`${styles.inputBox} ${error ? styles.error : ''} `}>
                <img src={textImg} alt="" />
                <input
                  type="text"
                  placeholder='Click here to edit'
                  value={textInput}
                  onChange={handelTextInput}
                />
                <span className={error ? styles.errorText : styles.displayNone} > Required Field</span>
              </div>
            </div>
          )
        }



      </div>
    </div >
  );
}

export default Workspace;
