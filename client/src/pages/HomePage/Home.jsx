import React from 'react';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx'
import styles from './Home.module.css';
import chatBot from '../../assets/chatbot.png'
// import chatBot form '../../assets/chatbot.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import tools from '../../assets/tools.png'
import chat from '../../assets/chatsc.png'

function Home() {
  return (
    <div className={styles.fullContainer}>
      <Navbar />

      <div className={`${styles.container} flex flex-col items-center justify-center flex-col`}>
        <Header />
        <div className={`${styles['centered-content']}  flex  flex-col items-center  items-center justify-center text-center `}>
          <h1 className={`outfit-font text-white text-larger `}>Replace your old school forms<br /> with <br />chatbots</h1>
          <p className={`sans-font text-light-gray`}>Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by<br /> 3 <br />your conversion rate compared to classical forms.</p>
        </div>
        <div>
          <img src={chatBot} alt="chat" />
        </div>

        {/* sec1 */}
        <div className={`${styles.section}  flex  items-center`}>
          <div className={styles.left}>
            <img src={img1} alt="img" />
          </div>
          <div className={styles.rightSec} >
            <h1 className='outfit-font text-white'>Easy building
              experience</h1>
            <p className='sans-font text-light-gray'>All you have to do is drag and
              drop blocks to create your app.
              Even if you have custom needs,
              you can always add custom
              code.</p>
          </div>

        </div>
        {/* sec2 */}
        <div className={`${styles.section}  flex  items-center`}>
          <div className={styles.rightSec} >
            <h1 className='outfit-font text-white'>Embed it in a click</h1>
            <p className='sans-font text-light-gray'>Embedding your typebot in
              your applications is a walk in
              the park. Typebot gives you
              several step-by-step platform-
              specific instructions. Your
              typebot will always feel "native".</p>
          </div>
          <div className={styles.left}>
            <img src={img2} alt="img" />
          </div>
        </div>



        <div className={styles.toolSec}>
          <img src={tools} alt="sec2" style={{ width: '100%' }} />
          <div style={{ width: '700px', marginLeft: '8%', marginTop: '3%' }}>
            <h1 className={`outfit-font text-white`}>Integrate with any platform</h1>
            <p className={`sans-font text-light-gray`}>Typebot offers several native integrations blocks as well as instructions on
              how to embed typebot on particular platforms</p>
          </div>
        </div>



        <div className={`${styles.centerDiv} flex flex-col justify-center items-center`}>
          <h1 className='outfit-font text-white  text-larger'>Collect results in real-time</h1>
          <p className='sans-font text-light-gray'>One of the main advantage of a chat application is that you collect the user's responses on each question.<br />
            <b className='flex justify-center' > You won't lose any valuable data.</b></p>
          <img src={chat} alt="chat" style={{ marginTop: '8%' }} />
        </div>


        <div>
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Home;
