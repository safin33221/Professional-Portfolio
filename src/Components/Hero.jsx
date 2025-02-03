// import styles from '../styles';

import { styles } from "../styles"


// import CmputersCanvas from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto top-32'>
      <div className="flex gap-5">
        <div className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-5 h-5 rounded-full  bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Safin</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              and Fronend developer, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Hero