import Image from 'next/image'
import BannerImg from '../static/banner.png'

const styles ={
    accentedButton :'bg-black text-white py-3 px-4 rounded-full cursor-pointer',
    content : 'flex'
} 
 
const Banner = () => {
  return(
    <div clasName={styles.content}>
      <div className='space-y-5'>
            <h1 className='text-[6rem] max-w-7xl font-mediumSerif'>Stay Curious.</h1>
            <h3 className='text-2xl'>Discover stories , thinking and experties from writers  on                   any topic
            </h3>
      
             <button className={styles.accentedButton}>Get Started</button>
      </div>

      <Image src={BannerImg} 
        className='object-contain'
        width={500}
        height={400}
      />
    </div>
  )
}
export default Banner