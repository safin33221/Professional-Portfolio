import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { styles } from "../styles"
import { services } from "../constanse"
import { Tilt } from "react-tilt"

const About = () => {
  return (
    <div className=" w-full mx-auto">
      <>
        <div className="text-center" >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        <div

          className='mt-4 text-center mx-auto text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am a passionate MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in building scalable, high-performance web applications and APIs. With a strong problem-solving mindset, I craft user-friendly, modern, and efficient digital solutions tailored to client needs. Let’s collaborate and bring your ideas to life!
        </div>

        <div className='mt-20 flex flex-wrap gap-10 mx-auto'>
          {
            services?.map((service, index) => <Tilt key={index} className='xs:w-[250px] mx-auto w-full'>
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-all duration-300 ease-in-out'
              >
                <div

                  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                  <img
                    src={service.icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                  />

                  <h3 className='text-white text-[20px] font-bold text-center'>
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Tilt>)
          }
        </div>
      </>
    </div>
  )
}

export default About