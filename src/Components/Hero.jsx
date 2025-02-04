// import styles from '../styles';

import { styles } from "../styles"
import { safin } from '../assets'

// import CmputersCanvas from './canvas';
const Hero = () => {
  return (
    <section className=' w-full h-screen mx-auto '>
      <div className="md:flex gap-5  pt-32">
        <div className={`${styles.paddingX}  flex-1  mx-auto flex flex-row items-start gap-5 `}>
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-5 h-5 rounded-full  bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroSubText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Safin</span>
            </h1>
            <p className={`${styles.heroHeadText} mt-2 text-white-100`}>
              Frontend Web Developer<br className='sm:block hidden' />

            </p>
            <p className="text-2xl">Your Vision, My Code_</p>
            <p className={`${styles.sectionSubText}md:w-4/5 w-full text-gray-400 capitalize`}>Crafting innovative digital experiences that bring your ideas to life, blending creativity and functionality to build solutions that inspire, engage, and deliver results.</p>
          </div>


        </div>
        <div  className=" flex-1 mx-auto" >
          <img src={safin} className=" w-[400px] rounded-full" alt="" />
        </div>

      </div>
    </section>
  )
}

export default Hero