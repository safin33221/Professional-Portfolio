
import emailjs from "@emailjs/browser";
import { styles } from '../styles'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import StarWrapper from '../Hook/StarWrapper'
import { useState } from "react";
import Swal from "sweetalert2";


const Contact = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    emailjs.send(import.meta.env.VITE_EmailJs_service_Id,
      import.meta.env.VITE_EmailJs_templete_Id, {
      from_name: name,
      to_name: "Safayet Hossan Safin",
      from_email: email,
      to_email: "safin33221@gmail.com",
      message: message,
    },
      import.meta.env.VITE_EmailJs_public_key
    )
      .then(res => {
        if (res.text === 'OK') {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you. I will get back to you as soon as possible.",
            showConfirmButton: false,
            timer: 1000
          });
          e.target.reset()
        }
      })
  }
  return (
    <div

    >
      <div className='text-center'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
      </div>

      <div className={`p-2 md:px-10 md:flex gap-10 `}>
        <div className='md:w-1/2 flex flex-col flex-1  justify-center text-left space-y-5'>
          <h1 className={styles.sectionSubText}>Let's Chat....</h1>
          <h2 className='text-3xl font-bold py-2'>Tell Me About Your Project.</h2>
          <p>Let's create something together🤘</p>
          <hr className='my-5' />
          <div className=' flex flex-col '>
            <h1 className='text-xl border-b-2 w-fit border-gray-400 text-gray-300'>Reach Out to Me</h1>


            <div className='flex flex-col  justify-center mt-2'>
              <h1 className='flex text-xl items-center text-gray-400 '><MdEmail className=' mx-2  ' />: safin33221@gmail.com</h1>
              <h1 className='flex text-xl items-center text-gray-400 '><FaWhatsapp className=' mx-2 ' />: 8801837429636</h1>
              <h1 className='flex text-xl items-center text-gray-400 '><FaLinkedinIn className=' mx-2 ' />: Safayet Hossan Safin</h1>
              <h1 className='flex text-xl items-center text-gray-400 '><FaGithub className=' mx-2 ' />: safin33221</h1>

              <h1 className='flex text-xl items-center text-gray-400 '><FaLocationDot className=' mx-2 ' />: Chittagong, Bangladesh.</h1>

            </div>


          </div>
        </div>

        <div

          className=' flex-1 bg-black-100 px-3 rounded-2xl'
        >


          <form

            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8 mx-4 '
          >
            <h1 className={styles.sectionSubText}>Send me email</h1>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                // value={form.name}
                // onChange={handleChange}
                placeholder="What's your  name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your email</span>
              <input
                type='email'
                name='email'
                // value={form.email}
                // onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Message</span>
              <textarea
                rows={3}
                name='message'
                // value={form.message}
                // onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary m-5 py-4 px-8 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary'
            >
              send
              {/* {loading ? "Sending..." : "Send"} */}
            </button>
          </form>
        </div>
      </div>


    </div>
  )
}
export default StarWrapper(Contact, "contact");