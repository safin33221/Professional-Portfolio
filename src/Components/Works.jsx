import { Tilt } from "react-tilt";
import { projects } from "../constanse";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion"; 
import github  from "../assets/github.png";
import link  from "../assets/link.svg";
import StarWrapper from "../Hook/StarWrapper";

const Works = () => {
  return (
    <div>
      <div className="text-center ">
        <p className={styles.sectionSubText}> My Projects</p>
        <h2 className={styles.sectionHeadText}>A Glimpse of My Development Journey</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5 px-3'>
        {
          projects.map((project, index) => 
            <div key={index} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary p-5 h-full rounded-2xl sm:w-[360px] w-full mx-auto'
              >
                <div className='relative w-full h-[230px]'>
                  <img
                    src={project.image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                  />

                  <div className='absolute inset-0 flex gap-3 justify-end m-3 card-img_hover'>
                    <div
                      onClick={() => window.open(project.source_code_link, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <img
                        src={github}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                      />
                    </div>
                    <div
                      onClick={() => window.open(project.live_page_link, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                      <img
                        src={link}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain text-white'
                      />
                    </div>
                  </div>
                </div>

                <div className='mt-5'>
                  <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <p
                      key={`${project.name}-${tag.name}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </Tilt>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default StarWrapper(Works, "work");