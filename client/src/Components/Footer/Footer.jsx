import img3 from '../../assets/img3.png'
import footer from '../../assets/footer.png'
import btnStyles from '../../Components/Navbar/Navbar.module.css'
import footbg1 from '../../assets/footbg1.png'
import footbg2 from '../../assets/footbg2.png'
import styles from './Footer.module.css'
import { LuExternalLink } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <div className={`flex flex-col justify-center items-center`} style={{ marginTop: '8%' }}>

        <h1 className={`outfit-font text-white`}>And many more features</h1>
        <p className={`sans-font text-light-gray`} >Typebot makes form building easy and comes with powerful features</p>
        <img src={img3} alt="img" style={{ marginTop: '5%' }} />

        <h3 className='outfit-font text-light-gray' style={{ marginTop: '5%' }}>Loved by teams and creators from all around the world</h3>
        <img src={footer} alt="" style={{ marginTop: '5%' }} />
      </div>



      <div className={styles.footContent}>
        <div className={styles.img1}>
          <img src={footbg1} alt="footerimg" />
        </div>
        <div className={styles.img2}>
          <img src={footbg2} alt="footerimg" />
        </div>
        <div className={`flex flex-col items-center ${styles.footSec}`}>
          <h1 className={`outfit-font text-white text-center`}>Improve conversion and user engagement<br></br>
            with FormBots </h1>
          <button onClick={() => navigate('/signup')} className={`${btnStyles.button} ${btnStyles.bgPrimary}`}>Create a FormBot</button>
          <p className={`sans-font text-light-gray`}>No trial. Generous free plan.</p>
        </div>


      </div>



      <div className={`flex justify-center ${styles.footer}`}>

        <div className={styles.col1}>
          <p className='text-white sans-font'>Made with ❤️ by<br />
            @cuvette</p>
        </div>

        <div className={styles.col2}>
          <p className='text-white sans-font'>Status<LuExternalLink /></p>
          <p className='text-white sans-font'>Documentation<LuExternalLink /></p>
          <p className='text-white sans-font'>Roadmap<LuExternalLink /></p>
          <p className='text-white sans-font'>Pricing</p>
        </div>
        <div className={styles.col3}>
          <p className='text-white sans-font'><a href="https://dicard.com" className='text-white sans-font'>Discord<LuExternalLink /></a></p>
          <p className='text-white sans-font'><a href="https://github.com/pritibishnoii" className='text-white sans-font'>GitHub repository<LuExternalLink /></a></p>
          <p className='text-white sans-font'><a href="https://x.com/bishnoipriti31?t=jUvbQV9Iv0v_TR6Fz0Utwg&s=08 " className='text-white sans-font'>Twitter<LuExternalLink /></a></p>
          <p className='text-white sans-font'><a href="https://www.linkedin.com/in/priti-bishnoi-573648243" className='text-white sans-font'>LinkedIn<LuExternalLink /></a></p>
          <p className='text-white sans-font'>OSS Friends</p>
        </div>

        <div className={styles.col4}>
          <p className='text-white sans-font'>About</p>
          <p className='text-white sans-font'>Contact</p>
          <p className='text-white sans-font'>Terms of Service</p>
          <p className='text-white sans-font'>Privacy Policy</p>
        </div>
      </div>

    </>
  )
}

export default Footer