import Image from 'next/image'
import logo from '../static/logo.png'


const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
  container: 'flex flex-1 max-w-9xl justify-around gap-10', 
  logoContainer: 'flex item-center flex-start',
  logo :'cursor-pointer object-contain',
  bannerNav :'cursor-pointer flex items-center space-x-85 mb-13 cursor-pointer ml-50',
  accentedButton :'bg-black text-white py-3 px-4 rounded-full cursor-pointer'
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.logoContainer}>
            <Image
              className={styles.logo}
              src={logo}
              height={40}
              width={200}
            />
        </div>

        <div className={styles.bannerNav}></div>
          <p>Our Services</p>
          <p>Member Ship</p>
          <p>Sign In</p>
          <p className={styles.accentedButton}>Get Started</p>
      </div>
    </div>
  )
}
export default Header