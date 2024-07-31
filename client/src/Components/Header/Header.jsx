import btnStyles from '../Navbar/Navbar.module.css'
import dasbord from '../../assets/dasbord.png'
import styles from './Header.module.css'
import bgImag from '../../assets/bgImg.png'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  return (

    <div className={`${styles.header}  flex flex-col justify-center text-center items-center`} >
      <main className={`${styles.mainContainer}  flex flex-col items-center `} style={{ backgroundImage: `url(${bgImag})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
        <div className={styles.container} >
          <h1 className={`${styles.mainHeading} outfit-font text-larger`}>Build advanced chatbots<br />
            visually</h1>
          <p className='sans-font text-white' style={{ margin: '12px auto' }}>Typebot gives you powerful blocks to create unique chat experiences. Embed them
            anywhere on your web/mobile apps and start collecting results like magic.</p>
          <button onClick={() => navigate('/signup')} className={`${btnStyles.button} ${btnStyles.bgPrimary}`}>Create a FormBot  for free</button>
        </div>
      </main>
      <div className={styles.imgContainer}>
        <img src={dasbord} alt="dasbord" />
      </div>
    </div>
  )
}

export default Header