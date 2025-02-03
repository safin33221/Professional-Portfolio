



import { technologies } from "../constanse";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="text-center mt-20">
        <p className={styles.sectionSubText}>My Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-5 w-10/12 mx-auto py-20'>
        {technologies.map((technology) => (
          <div className='' key={technology.name}>
            <img className="w-14 h-14" src={technology.icon} alt="" />
          </div>
        ))}
      </div>

    </>

  );
};

export default Tech