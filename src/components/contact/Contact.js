import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion/dist/framer-motion'
import Navbar from '../Navbar/Navbar'
import Mohmed from '../../img/Mohmed.jpg'

const Contact = () => {
    const Animation = {
        hidden:{
          opacity:0,
          y:900,
        },
        visible:{
          opacity:1,
          y:0,
          transition:{
            duration: .8,
          }
        }
      }
      const Animationdelay5 = {
        hidden:{
          opacity:0,
          y:900,
        },
        visible:{
          opacity:1,
          y:0,
          transition:{
            duration: .8,
            delay:.5
          }
        }
      }
      const Animationdelay10 = {
        hidden:{
          opacity:0,
          y:900,
        },
        visible:{
          opacity:1,
          y:0,
          transition:{
            duration: .8,
            delay:.7
          }
        }
      }
  return (
    <div className='Contact'>
       <motion.h1
          variants={Animation}
          initial="hidden"
          animate="visible"
          className="Contect-title"
       >The Stage is Yours</motion.h1>
       <motion.p
          variants={Animationdelay5}
          initial="hidden"
          animate="visible"
          className="Contect-desc"
       >I’m always looking to collaborate on interesting projects with great people. Need a supportive hand?
       </motion.p>
       <motion.div 
          variants={Animationdelay10}
          initial="hidden"
          animate="visible"
          className='Contact-detales'
          >
          <img className='Contact-image' src={Mohmed}/>
          <h1>Mohmed Mahmoud</h1>
          <p>Front-End Developer</p>
          <div className='Contact-me'>
            <button className='btn'>
              <a 
              href="https:wa.me/+201157068530" 
              target='blank' 
              style={{color:'#fff',textDecoration:'none'}}
              >
                Whatsapp
              </a>
            </button>
            <button className='btn'>
              <a 
              href="https://drive.google.com/file/d/14b_enbuLTcgxxLIhS9FpkpU15NvRrUa7/view?usp=drivesdk" 
              target="blank"
              style={{color:'#fff',textDecoration:'none'}}
              >
                 Download CV
              </a>
            </button>
          </div>
          <div className='scoial'>
             <a 
             href='https://www.facebook.com/Anamohmed135' 
             target="blank"
             >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
             <a
               href='https://twitter.com/Anamohmed00' 
               target="blank"
               >
               <i class="fa-brands fa-twitter"></i>
              </a>
             <a 
             href='https://www.linkedin.com/in/mohmedmahmoudfouad' 
             target="blank"
             >
               <i class="fa-brands fa-linkedin-in"></i>
             </a>
             <a 
             href='https://github.com/Mohmed932' 
             target="blank"
             >
               <i class="fa-brands fa-github"></i>
             </a>
          </div>
       </motion.div>
       <Navbar/>
    </div>
  )
}

export default Contact